const _0x387c09=_0x3525;(function(_0x271fa5,_0x467ad4){const _0xc6d6d7=_0x3525,_0x59ccc2=_0x271fa5();while(!![]){try{const _0x3a0008=parseInt(_0xc6d6d7(0x1b7))/0x1+-parseInt(_0xc6d6d7(0x1aa))/0x2*(parseInt(_0xc6d6d7(0x1ad))/0x3)+-parseInt(_0xc6d6d7(0x1be))/0x4*(-parseInt(_0xc6d6d7(0x1c1))/0x5)+-parseInt(_0xc6d6d7(0x1a9))/0x6+parseInt(_0xc6d6d7(0x1c0))/0x7+-parseInt(_0xc6d6d7(0x1b4))/0x8+parseInt(_0xc6d6d7(0x1bd))/0x9*(parseInt(_0xc6d6d7(0x1b3))/0xa);if(_0x3a0008===_0x467ad4)break;else _0x59ccc2['push'](_0x59ccc2['shift']());}catch(_0x4dcdd4){_0x59ccc2['push'](_0x59ccc2['shift']());}}}(_0x35df,0x2c773));const fs=require('fs'),{cmd}=require('../command'),saveStatus=async(_0xb5bccd,_0x39216d,_0x4f4441)=>{const _0x5967f5=_0x3525;try{const _0x3b252=_0xb5bccd[_0x5967f5(0x1b2)][_0x5967f5(0x1b1)]('\x20')[_0x5967f5(0x1ab)](0x1)['join']('\x20');if(!_0x3b252)return _0x39216d(_0x5967f5(0x1b5));fs['writeFileSync'](_0x5967f5(0x1b0),_0x3b252,_0x5967f5(0x1bb)),_0x39216d(_0x5967f5(0x1ac));const _0x48578a=fs['readFileSync']('status.txt',_0x5967f5(0x1bb));await _0x4f4441[_0x5967f5(0x1bf)](_0xb5bccd[_0x5967f5(0x1af)],{'text':_0x5967f5(0x1bc)+_0x48578a});}catch(_0x2933e9){console[_0x5967f5(0x1a8)]('Error:',_0x2933e9),_0x39216d(_0x5967f5(0x1ba)+_0x2933e9[_0x5967f5(0x1b9)]);}};function _0x35df(){const _0x3ad288=['126qdlgQM','309348gvjGjI','sendMessage','2372867fGYbEG','5JugTLK','error','1850838alJdfO','7388UZUTUQ','slice','Status\x20saved\x20successfully!','24sHqbgL','owner','from','status.txt','split','body','218390sOJnAt','1664848cPIyFB','Please\x20provide\x20a\x20status\x20to\x20save.\x20Usage:\x20.save\x20<status>','save','6198KhcEUG','Save\x20a\x20status\x20message','message','Error\x20saving\x20status:\x20','utf8','Saved\x20Status:\x20'];_0x35df=function(){return _0x3ad288;};return _0x35df();}function _0x3525(_0x5a13f2,_0x261279){const _0x35df3f=_0x35df();return _0x3525=function(_0x352574,_0x4ab9cf){_0x352574=_0x352574-0x1a8;let _0x33cf3f=_0x35df3f[_0x352574];return _0x33cf3f;},_0x3525(_0x5a13f2,_0x261279);}cmd({'pattern':_0x387c09(0x1b6),'desc':_0x387c09(0x1b8),'category':_0x387c09(0x1ae),'filename':__filename},async(_0x4acdec,_0x58ef5b,_0x566c4e,{reply:_0x1794a4})=>{await saveStatus(_0x566c4e,_0x1794a4,_0x4acdec);});
