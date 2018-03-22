function eventAgency() {
    var tier = arguments[0],parn = arguments[1],fn = arguments[2];
    this.ret="";
    (function () {
        if(tier.className==parn) fn(tier);
        if(pare(tier,parn,"className",ret)) fn(ret);
        if(tier.id==parn) fn(tier);
        if(pare(tier,parn,"id",ret)) fn(ret);
    })()
}

function pare(elem,elemP,type,a){
  var cur = elem.parentNode;
  while ( cur && cur.nodeType !== 9) {
    if(cur[type]==elemP) {
      this.ret=cur;
      return true
    }
    cur = cur.parentNode;
  }
}
