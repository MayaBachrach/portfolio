/* A project occupies space in the document; its colored surface is the source star. */
window.createPanelGrowth = function (panel) {
  const gallery = document.querySelector('.carousel');
  const windowNode = gallery.querySelector('.carousel-window');
  const intro = document.querySelector('.hero-intro');
  const ns = 'http://www.w3.org/2000/svg';
  const surface = document.createElementNS(ns, 'svg');
  surface.classList.add('project-growth-surface');
  surface.setAttribute('aria-hidden', 'true');
  surface.setAttribute('preserveAspectRatio', 'none');
  surface.setAttribute('viewBox', '0 0 200 200');
  const polygon = document.createElementNS(ns, 'polygon');
  surface.append(polygon);
  gallery.append(surface, panel);
  panel.setAttribute('aria-modal', 'false');
  let progress = 0, frame = 0, finish, source, origin, target, baseHeight, points, tiles = [];
  let savedScroll = 0;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const mix = (a, b, p) => a + (b - a) * p;
  function sample(d) {
    const path = document.createElementNS(ns, 'path');
    path.setAttribute('d', d);
    const length = path.getTotalLength();
    return Array.from({length: 100}, (_, i) => path.getPointAtLength(length * i / 100));
  }
  function measure() {
    target = { x: (gallery.clientWidth - panel.offsetWidth) / 2, y: 12,
      w: panel.offsetWidth, h: panel.scrollHeight };
  }
  function paint(p) {
    progress = p;
    const x = mix(origin.x, target.x, p), y = mix(origin.y, target.y, p);
    const w = mix(origin.w, target.w, p), h = mix(origin.h, target.h, p);
    surface.style.cssText = `left:${x}px;top:${y}px;width:${w}px;height:${h}px`;
    const shape = points.map(({x, y}) => {
      const dx = x - 100, dy = y - 100;
      const factor = 98 / Math.max(Math.abs(dx), Math.abs(dy), 1);
      return [mix(x, 100 + dx * factor, p),mix(y, 100 + dy * factor, p)];
    });
    polygon.setAttribute('points', shape.map(point=>point.join(',')).join(' '));
    panel.style.clipPath = p === 1 ? 'none' : 'polygon(' + shape.map(([sx,sy])=>`${x + sx*w/200 - target.x}px ${y + sy*h/200 - target.y - (1-p)*24}px`).join(',') + ')';
    gallery.style.height = mix(baseHeight, Math.max(baseHeight, target.h + 32), p) + 'px';
    intro.style.transform = `translateX(${-Math.min(40, innerWidth * .04) * p}px) scale(${1 - .06 * p})`;
    for (const item of tiles) {
      item.node.style.transform = `translateX(${item.shift * p}px)`;
      item.node.style.opacity = '1';
    }
    // The drawing and label leave with the source, then the readable project content arrives.
    source.style.opacity = String(1 - Math.min(1, p * 4));
    panel.style.opacity = String(Math.max(0, Math.min(1, (p - .68) / .32)));
    panel.style.transform = `translateY(${(1 - p) * 24}px)`;
    panel.style.pointerEvents = p > .7 ? 'auto' : 'none';
  }
  function travel(to) {
    cancelAnimationFrame(frame);
    finish?.(false);
    const scrollStart = scrollY;
    const from = progress, duration = motion.matches ? 0 : (to ? 680 : 560) * Math.abs(to - from);
    return new Promise(resolve => {
      finish = resolve;
      let start;
      function tick(time) {
        start ??= time;
        const t = duration ? Math.min(1, (time - start) / duration) : 1;
        const eased = t * t * (3 - 2 * t);
        paint(mix(from, to, eased));
        if (!to && scrollStart > savedScroll) scrollTo({top:mix(scrollStart,savedScroll,eased), behavior:"instant"});
        if (t < 1) frame = requestAnimationFrame(tick);
        else { finish = null; resolve(true); }
      }
      frame = requestAnimationFrame(tick);
    });
  }
  function reset() {
    panel.close();
    gallery.classList.remove('project-expanded');
    gallery.style.height = '';
    intro.style.transform = '';
    tiles.forEach(item => { item.node.style.transform = ''; item.node.style.opacity = ''; item.node.inert = false; });
    source?.style.removeProperty('opacity');
    source?.setAttribute('aria-expanded','false');
    if (source) source.inert = false;
    panel.style.cssText = panel.style.cssText.replace(/(?:opacity|transform|pointer-events):[^;]+;?/g, '');
    progress = 0;
  }
  return {
    async open(tile) {
      if (panel.open) { measure(); return travel(1); }
      source = tile || gallery.querySelector('.carousel-tile');
      savedScroll = scrollY;
      const rect = source.getBoundingClientRect(), box = gallery.getBoundingClientRect();
      const pseudo = getComputedStyle(source, '::before');
      const insetX = parseFloat(pseudo.left) || 0, insetY = parseFloat(pseudo.top) || 0;
      origin = {x: rect.left - box.left + insetX, y: rect.top - box.top + insetY,
        w: parseFloat(pseudo.width) || rect.width, h: parseFloat(pseudo.height) || rect.height};
      baseHeight = windowNode.offsetHeight;
      points = sample(window.PORTFOLIO_SHAPES.star[Number(source.dataset.starShape) || 0]);
      polygon.style.fill = getComputedStyle(source).getPropertyValue('--carousel-color');
      panel.style.setProperty('--panel-background', 'transparent');
      const color = getComputedStyle(source).getPropertyValue('--carousel-color').trim();
      const probe = document.createElement('span'); probe.style.color = color; gallery.append(probe);
      const rgb = getComputedStyle(probe).color.match(/[\d.]+/g).map(Number); probe.remove();
      const light = (rgb[0]*.2126 + rgb[1]*.7152 + rgb[2]*.0722) < 115;
      const ink = light ? '#FAF4E9' : getComputedStyle(document.documentElement).getPropertyValue('--ink').trim();
      panel.classList.toggle('light-panel-ink',light); panel.classList.toggle('dark-panel-ink',!light);
      panel.style.setProperty('--panel-text', ink); panel.style.setProperty('--close-color', ink);
      gallery.classList.add('project-expanded');
      panel.show();
      scrollTo({top:savedScroll, behavior:"instant"});
      measure();
      const center = rect.left + rect.width / 2;
      const others = [...gallery.querySelectorAll('.carousel-tile')].filter(n => n !== source).map(node => {
        const r = node.getBoundingClientRect(), label = node.querySelector('.star-label').getBoundingClientRect();
        return {node, left: r.left + r.width / 2 < center, lo: Math.min(r.left,label.left), hi: Math.max(r.right,label.right)};
      });
      const leftEdge = Math.max(...others.filter(n=>n.left).map(n=>n.hi));
      const rightEdge = Math.min(...others.filter(n=>!n.left).map(n=>n.lo));
      tiles = others.map(item=>({node:item.node, shift:item.left
        ? Math.min(0, box.left + target.x - 40 - leftEdge)
        : Math.max(0, box.left + target.x + target.w + 40 - rightEdge)}));
      tiles.forEach(item => item.node.inert = true);
      source.setAttribute('aria-expanded', 'true');
      source.inert = true;
      paint(0);
      return travel(1);
    },
    async close() {
      if (!panel.open) return true;
      // Return to the source composition before collapsing a long project.

      const completed = await travel(0);
      if (completed) reset();
      return completed;
    },
    refresh() { if (panel.open) { measure(); paint(progress); } }
  };
};
