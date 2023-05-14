function generation(n,g){
    if(n==-3){
        if(g=='m'){
            document.write("great grandfather");
        }
        else if(g=='f'){
            document.write("great grandmother");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else if(n==-2){
        if(g=='m'){
            document.write("grandfather");
        }
        else if(g=='f'){
            document.write("grandmother");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else if(n==-1){
        if(g=='m'){
            document.write("father");
        }
        else if(g=='f'){
            document.write("mother");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else if(n==0){
        if(g=='m'){
            document.write("me!");
        }
        else if(g=='f'){
            document.write("me!");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else if(n==1){
        if(g=='m'){
            document.write("son");
        }
        else if(g=='f'){
            document.write("daughter");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else if(n==2){
        if(g=='m'){
            document.write("grandson");
        }
        else if(g=='f'){
            document.write("granddaughter");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else if(n==3){
        if(g=='m'){
            document.write("grand grandson");
        }
        else if(g=='f'){
            document.write("grand granddaughter");
        }
        else{
            document.write("Wrong Gender Mentioned.Enter Valid Gender");
        }
    }
    else{
        document.write("Give the correct Generation number");
    }
}
let a=parseInt(prompt("Enter the Generation number :"));
let b=String(prompt("Enter the Gender :"));
generation(a,b)