/* Authored vector gestures. The original image remains stationary; only complete
   drawn contours and object layers animate. Every path shares its wrist anchors. */
window.portfolioActionScene = function(item, id) {
 const path = (d, next, dur, times='0;.18;.32;.44;.57;.74;1') => '<path d="'+d+'">'+(next?'<animate attributeName="d" dur="'+dur+'s" repeatCount="indefinite" keyTimes="'+times+'" values="'+[d,d,next,next,d,d,d].join(';')+'"/>':'')+'</path>';
 const pulse = (d,dur) => '<path d="'+d+'" opacity="0"><animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;.30;.34;.45;1" dur="'+dur+'s" repeatCount="indefinite"/></path>';
 let cut='', layers='', face='';
 switch(item.action) {
 case 'social':
  cut='M138 145L156 139 172 145 172 163 138 163Z';
  layers=path('M138 157Q146 156 149 150Q151 144 157 146L164 149Q169 151 166 154L157 151M146 159Q151 155 154 151M151 160L158 155L165 157','M138 157Q146 156 150 151Q152 147 157 149L164 152Q169 154 166 156L157 153M146 159Q151 155 154 153M151 160L158 155L165 157',2.8)+pulse('M197 137l10-8m-8 14l13-2m-15 8l11 5',2.8);break;
 case 'app-development':
  cut='M100 165L119 162 132 166 131 179 100 182Z';
  layers=path('M131 168Q124 165 117 168L106 171Q100 174 103 176L115 173M130 175Q123 173 118 177L108 180M111 171L109 175M117 169L115 174','M131 168Q124 165 117 170L106 174Q100 177 103 178L115 175M130 175Q123 173 118 177L108 180M111 173L109 177M117 171L115 176',1.9)+path('M105 182l5 0m7-3h5','M105 183l5 0m7-3h5',1.9);break;
 case 'dj':
  cut='M43 175H77V195H43Z';
  layers='<g><ellipse cx="60" cy="199" rx="21" ry="7"/><path d="M43 199q17 10 34 0M59 198l3 2"/><animateTransform attributeName="transform" type="rotate" values="0 60 199;0 60 199;12 60 199;12 60 199;0 60 199;0 60 199;0 60 199" keyTimes="0;.18;.32;.44;.57;.74;1" dur="2.5s" repeatCount="indefinite"/></g>'+path('M53 175Q53 178 49 182L44 187Q43 190 47 190L55 184M61 174L53 189Q52 192 56 191L64 180M68 174L62 187Q62 191 66 188L74 176Q77 176 70 175','M53 175Q57 178 53 184L49 189Q48 192 52 191L59 185M64 175L57 190Q57 193 61 191L68 181M71 175L67 188Q67 191 71 188L77 176Q79 176 70 175',2.5);break;
 case 'producer':
  cut='M132 140L144 130 157 131 168 139 165 155 133 155Z';
  layers=path('M133 149Q137 142 142 137Q146 132 150 136L160 140Q165 144 162 146L153 141M144 140L151 146L158 147M138 145L145 151L153 151','M133 149Q137 142 142 139Q146 135 150 139L160 143Q165 147 162 148L153 144M144 142L151 148L158 149M138 145L145 151L153 152',2.1)+path('M149 155h6m4-2h5','M149 157h6m4-2h5',2.1);break;
 case 'storytelling':
  layers='<path d="M126 138Q148 119 173 112L171 124Q147 126 126 148Z"><animate attributeName="d" dur="3.8s" repeatCount="indefinite" keyTimes="0;.17;.32;.47;.64;.8;1" values="M126 138Q148 119 173 112L171 124Q147 126 126 148Z;M126 138Q148 119 173 112L171 124Q147 126 126 148Z;M126 138Q155 93 157 94L152 108Q140 116 126 148Z;M126 138Q125 87 119 98L115 114Q121 130 126 148Z;M126 138Q105 108 87 112L87 124Q105 130 126 148Z;M126 138Q105 117 85 120L87 131Q107 135 126 148Z;M126 138Q105 117 85 120L87 131Q107 135 126 148Z"/><animate attributeName="opacity" values="0;1;1;1;0;0" keyTimes="0;.17;.64;.78;.84;1" dur="3.8s" repeatCount="indefinite"/></path>';break;
 case 'graphic':
  // The pencil tip stays on the tablet as a flexing finger presses and releases.
  layers=path('M78 152Q81 147 85 149L88 153M77 155L82 152','M78 152Q81 149 85 151L88 155M77 155L82 154',2.6)+pulse('M76 169q9-2 18 2m-15 2l13 3',2.6);break;
 case 'performance':
  layers=path('M112 81q3 2 5 0','M112 81q3 8 5 0',2.7)+pulse('M122 65l7-9m-1 14l10-4',2.7);break;
 case 'creative':
  // Preserve the complete hands and interlocking pieces; accent the existing join.
  layers=pulse('M116 201l-1-8m5 10l4-7m-12 7l-7-4',3.2);break;
 case 'set-design':
  // Pendulum pivots at the actual thread, never at the character's wrist.
  cut='M79 152H96V170H79Z';
  layers='<g><path d="M86 146V156L89 159L94 159L90 163L91 168L86 165L81 168L82 163L78 160L84 159Z"/><animateTransform attributeName="transform" type="rotate" values="0 86 146;13 86 146;-10 86 146;6 86 146;-3 86 146;0 86 146;0 86 146" keyTimes="0;.15;.3;.45;.6;.78;1" dur="3.6s" repeatCount="indefinite"/></g>';break;
 case 'animation':
  layers=path('M153 110Q167 98 173 100L169 112Q158 115 150 122','M153 110Q167 88 168 94L163 108Q155 114 150 122',2.3);break;
 }
 // Match the small eyes and restrained expression of the other original drawings.
 // Face contours, flower hair, crown, headphones and body remain the supplied art.
 if (item.action === 'dj') {
  cut += ' M94 67H145V108H94Z';
  layers += path('M103 80l.4 2.4M137 71l.3 2.3M119 93q3 5 5-1');
 } else if (item.action === 'producer') {
  cut += ' M115 77H145V107H115Z';
  layers += path('M122 88l.3 2.3M141 81l.2 2.2M131 98q3 5 5-1');
 }
 const mask=cut?'<defs><clipPath id="'+id+'-body"><path clip-rule="evenodd" d="M0 0H240V240H0Z '+cut+'"/></clipPath></defs>':'';
 return '<svg class="star-action-scene" viewBox="0 0 240 240" aria-hidden="true" focusable="false">'+mask+'<image href="'+item.src+'" width="240" height="240" '+(cut?'clip-path="url(#'+id+'-body)"':'')+'/><g class="drawn-action" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round">'+layers+'</g></svg>';
};
