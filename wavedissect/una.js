window.ooo={abtoascii:function(bb){var bba=new Uint8Array(bb);return String.fromCharCode.apply(String,bb);},};
BufferLoader=function(acx,urls,callback){this.acx=acx;this.urls=urls;this.onload=callback;this.bufferList=new Array();this.loadCount=0;};
BufferLoader.prototype={loadBuffer:function(url,index){var loader=this;var req=new XMLHttpRequest();req.open("GET",url,true);req.responseType="arraybuffer";
  req.onload=function(){loader.acx.decodeAudioData(req.response,function(buffer){
        if(!buffer){console.log('error decoding file data: '+url);return;}loader.bufferList[index]=buffer;
        if(++loader.loadCount==loader.urls.length){loader.onload(loader.bufferList);}}
      ,function(error){var bb=new Uint8Array(req.response);console.log('Decode audio data error:\n'+String.fromCharCode.apply(String,bb));});};
  req.onerror=function(){var bytes=new Uint8Array(req.response);var s=String.fromCharCode.apply(String, bytes);console.log('ERROR LOADING FILE :\n'+s);
  };req.send();},load:function(){for(var i=0;i<this.urls.length;++i)this.loadBuffer(this.urls[i],i)}};
/*--------------------------------------------------------------------------------------------------------*/
function loaduna($,window,undefined){
  $.acx=new(typeof AudioContext!=='undefined'&&AudioContext!==null?AudioContext:webkitAudioContext);
  $.master=$.acx.createGain();$.master.connect($.acx.destination);
  $.playaudiobuffer=function(ab){var bs=this.acx.createBufferSource();bs.buffer=ab;bs.connect(this.master);bs.start(0);return bs;};
  $.playarraybuffer=function(arb){var lll=this;this.acx.decodeAudioData(arb,function(b){if(!b){alert('error decoding file data');return;}
    lll.playaudiobuffer(b);},function(error){console.log(ooo.abtoascii(request.response));console.error('decodeAudioData error',error);});};
  $.playbytes=function(bb){this.playarraybuffer(Uint8Array.from(bb).buffer);};
  $.tobytes=function(ab){var bba=new Uint8Array(ab);var bb=[];for(var b=0;b<bba.length;b++){bb[b]=bba[b]}return bb;};
  $.mix=function(abs){var chs=0;var dur=0;for(var i=0;i<abs.length;i++){if(abs[i].numberOfChannels>chs){chs=abs[i].numberOfChannels;}if(abs[i].duration>dur){dur=abs[i].duration;}}
   var mm=context.createBuffer(chs,this.acx.sampleRate*maxLength,acx.sampleRate);for(var j=0;j<abs.length;j++){
    for(var c=0;c<abs[j].numberOfChannels;c++){var oo=mm.getChannelData(c);var ii=abs[i].getChannelData(c);for(var i=0;i<oo.length;i++){oo[i]+=ii[i];}}}return mm;};
  $.whitebuffer=function(dur,chs,db,onStart,onStep){if(!onStart){onStart=function(n){}}if(!onStep){onStep=function(n){}}if(!chs){chs=1}if(!dur){dur=1000}var outout=this.acx.createBuffer(chs,this.acx.sampleRate*(dur/1000),this.acx.sampleRate);
   onStart(dur,chs);
   for(var ch=0;ch<outout.numberOfChannels;ch++){var out=outout.getChannelData(ch);
     for(var i=0;i<out.length;i++){out[i]=(Math.random()*2-1)*db;onStep(out[i],dur);}}return outout;};
  $.pinkbuffer=function(dur,chs,db,onStart,onStep){if(!onStart){onStart=function(n){}}if(!onStep){onStep=function(n){}}if(!chs){chs=1}if(!dur){dur=1000}var b0,b1,b2,b3,b4,b5,b6;b0=b1=b2=b3=b4=b5=b6=0.0;
        onStart(dur,chs);
      var buffout=this.acx.createBuffer(chs,this.acx.sampleRate*(dur/1000),this.acx.sampleRate);
      for(var ch=0;ch<buffout.numberOfChannels;ch++){var out=buffout.getChannelData(ch);
        for(var i=0;i<out.length;i++){var w=Math.random()*2-1;
          b0=0.99886*b0+w*0.0555179;
          b1=0.99332*b1+w*0.0750759;
          b2=0.96900*b2+w*0.1538520;
          b3=0.86650*b3+w*0.3104856;
          b4=0.55000*b4+w*0.5329522;
          b5=-0.7616*b5-w*0.0168980;
          out[i]=b0+b1+b2+b3+b4+b5+b6+w*0.5362;
          out[i]*=0.11*db; // (roughly) compensate for gain
          onStep(out[i],dur);
          b6=w*0.115926;}}return buffout;};

$.brownbuffer=function (dur,chs,db,onStart,onStep){if(!onStart){onStart=function(n){}}if(!onStep){onStep=function(n){}}if(!chs){chs=1}if(!dur){dur=1000}var outout=this.acx.createBuffer(chs,this.acx.sampleRate*(dur/1000),this.acx.sampleRate);
   onStart(dur,chs);var lastOut=0;
   for(var ch=0;ch<outout.numberOfChannels;ch++){var out=outout.getChannelData(ch);
for (var i = 0; i < out.length; i++) {
            var white = Math.random() * 2 - 1;
            out[i] = ((lastOut + (0.02 * white)) / 1.02)*db;
            lastOut = out[i];
            out[i] *= 3.5; // (roughly) compensate for gain
onStep(out[i],dur);
        }

}return outout;};
$.toothbuffer=function (dur,frq,db,chs,onStart,onStep){if(!onStart){onStart=function(n){}}if(!onStep){onStep=function(n){}}if(!chs){chs=1}if(!dur){dur=1000}if(!db){db=1}
 onStart(frq,dur,db,chs);dur=dur/1000;var size=this.acx.sampleRate*dur;
 var period=this.acx.sampleRate/frq;var iPer=Math.round(period);
 var step=2/period;
 var outout=this.acx.createBuffer(chs,size,this.acx.sampleRate); 
 for(var ch=0;ch<outout.numberOfChannels;ch++){var out=outout.getChannelData(ch);
  for(var i=0;i<out.length;i+=iPer){var f;var fnc=0;
   for(f=0;f<=1;f+=step){out[i+fnc]=db*f;fnc++;onStep(out[i+fnc],dur)}
   for(f=1;f>=-1;f-=step){out[i+fnc]=db*f;fnc++;onStep(out[i+fnc],dur)}
   for(f=-1;f<=0;f+=step){out[i+fnc]=db*f;fnc++;onStep(out[i+fnc],dur)}
   }}return outout;};
$.bezierbuffer=function (dur,frq,db,chs,A1x,A1y,A2x,A2y,B1x,B1y,B2x,B2y,onStart,onStep){if(!onStart){onStart=function(n){}}if(!onStep){onStep=function(n){}}if(!chs){chs=1}if(!dur){dur=1000}if(!db){db=1}
 onStart(dur,frq,db,chs);dur=dur/1000;var size=this.acx.sampleRate*dur;var A1=new coord(A1x,A1y);var A2=new coord(A2x,A2y);var B1=new coord(B1x,B1y);var B2=new coord(B2x,B2y);
 frq=frq*2;var period=this.acx.sampleRate/frq;var iPer=Math.round(period*2); 
 var outout=this.acx.createBuffer(chs,size,this.acx.sampleRate); 
 for(var ch=0;ch<outout.numberOfChannels;ch++){var out=outout.getChannelData(ch);
  for(var i=0;i<out.length;i+=iPer){var f;var fnc=0;
   for(f=0;f<=iPer/2;f++){out[i+fnc]=db*getBezier(1/(period/f),A1,A2).y;onStep(out[i+fnc],dur);fnc++;}
   for(f=0;f<=iPer/2;f++){out[i+fnc]=db*getBezier(1/(period/f),B1,B2).y;onStep(out[i+fnc],dur);fnc++;}
   }}return outout;};

$.sinebuffer=function (dur,frq,db,chs,onStart,onStep){
   return this.bezierbuffer(dur,frq,db,chs,0,1,0.5,1,0.5,-1,1,-1,onStart,onStep);}
};

coord=function(x,y){if(!x)var x=0;if(!y)var y=0;return{x:x,y:y};}
function B1(t){return t*t*t}function B2(t){return 3*t*t*(1-t)}function B3(t){return 3*t*(1-t)*(1-t)}function B4(t){return (1-t)*(1-t)*(1-t)}
var C1=coord(0,0);var C4=coord(1,0);
function getBezier(percent,C2,C3) {
  var pos = new coord();
  pos.x = C1.x*B1(percent) + C2.x*B2(percent) + C3.x*B3(percent) + C4.x*B4(percent);
  pos.y = C1.y*B1(percent) + C2.y*B2(percent) + C3.y*B3(percent) + C4.y*B4(percent);
  return pos;
}

function interleave(inputL,inputR){
  var length=inputL.length+inputR.length;
  var result=new Float32Array(length);
  var index=0,inputIndex=0;
  while(index<length){result[index++]=inputL[inputIndex];result[index++]=inputR[inputIndex];inputIndex++;}
  return result;}
function floatTo16BitPCM(output,offset,input){for(var i=0;i<input.length;i++,offset+=2){var s=Math.max(-1,Math.min(1,input[i]));output.setInt16(offset,s<0?s*0x8000:s*0x7FFF,true);}}
function writeString(view,offset,string){for(var i=0;i<string.length;i++){view.setUint8(offset+i,string.charCodeAt(i));}}
function encodeWAV(audiobuff){var samples=[];var numChannels=audiobuff.numberOfChannels;var sampleRate=una.acx.sampleRate;
  if(numChannels>1){var ll=audiobuff.getChannelData(0);var rr=audiobuff.getChannelData(1);samples=interleave(ll,rr)}
  else{samples=audiobuff.getChannelData(0);}
  var buffer=new ArrayBuffer(44+samples.length*2);
  var view=new DataView(buffer);
  /* RIFF identifier */         writeString(view, 0, 'RIFF');
  /* RIFF chunk length */       view.setUint32(4, 36 + samples.length * 2, true);
  /* RIFF type */               writeString(view, 8, 'WAVE');
  /* format chunk identifier */ writeString(view, 12, 'fmt ');
  /* format chunk length */     view.setUint32(16, 16, true);
  /* sample format (raw) */     view.setUint16(20, 1, true);
  /* channel count */           view.setUint16(22, numChannels, true);
  /* sample rate */             view.setUint32(24, sampleRate, true);
  /* byte rate (sample rate * block align) */           view.setUint32(28, sampleRate * 4, true);
  /* block align (channel count * bytes per sample) */  view.setUint16(32, numChannels * 2, true);
  /* bits per sample */         view.setUint16(34, 16, true);
  /* data chunk identifier */   writeString(view, 36, 'data');
  /* data chunk length */       view.setUint32(40, samples.length * 2, true);
  floatTo16BitPCM(view, 44, samples);
  // our final binary blob that we can hand off
return (new Blob ( [ view ], { type : 'audio/wav' } ));
}
function playWAV(blob){var blobURL=window.webkitURL.createObjectURL(blob);window.open(blobURL);}
function saveWAV(blob){
var blobURL=window.webkitURL.createObjectURL(blob);
var link = window.document.createElement('a');
    link.href = blobURL;
    link.download = 'output.wav';
    var click = document.createEvent("Event");
    click.initEvent("click", true, true);
    link.dispatchEvent(click);
}