function raiz() {
    
    var a= document.getElementById('caja1').value;
    var b= document.getElementById('caja2').value;
    var c= document.getElementById('caja3').value;
    var r= 0;
    var r2= 0;

    p=((b*b)-4*a*c);
    
    if(p==0){
        
        alert("no hay resultado");
     
    }
        else {
            
            x1 =(-b+(Math.sqrt(p))/(2*a));
            x2 =(-b-(Math.sqrt(p))/(2*a));
        
            r =document.getElementById("caja4").value= x1;
            r2 =document.getElementById("caja5").value= x2;
        }
        return false;
    }