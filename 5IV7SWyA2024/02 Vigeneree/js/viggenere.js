var viggenere = viggenere || (function(){
    
    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
            var l = abc.length;

            return function(c){
                var i = abc.indexOf(c.toLoerCase());
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        //cifrar
                        pos += desp;
                        pos = (pos>=l)?pos-l : pos;
                    }else{
                        //descifrar
                        pos -= desp;
                        pos = (pos<0)?l+pos : pos;
                    
                       
                }
                return abc[pos];

            }
            return c;
        })();
        //expresion regular
        //ig significa globar
        var re = (/([a-z])/ig);
        return String(txt).replace(re, function(match){
            return replace(match)
        });
    }
})