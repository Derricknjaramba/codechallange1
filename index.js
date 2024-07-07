function grader(marks){
    if(marks<70){
        return "A";
    }
    else if(marks>=60 && marks <=70){
        return "B";
    }
    else if(marks<=59 && marks >=49){
        return "C";
    }
    else if(marks<49 && marks>=40)
        return "D";
    else if(marks<40){
        return"E";
    }
}
grader(55);

function speeder(speed){
    if(speed<70){
        return"OK";
    }
    else if(speed==80){
        return"points:2";
    }
    else if(speed>100){
        return"lincense suspended";
    }
}
speeder(80);

function one(monthlyamount){
    if(monthlyamount>=24001 && amount<=32333){
        let paye=monthlyamount*0.25;
        console.log(paye);
        let payepayable=paye-2400;
        console.log(payepayable);
        return monthlyamount*0.25;
    }
   
    else if(monthlyamount>=30000 && monthlyamount<=34999){
        let nhifdeduction=900;
        return nhifdeduction;
    }
    else if(monthlyamount>=7001 && amount<=36000){
        let nssfdeducted=monthlyamount*0.06;
        return nssfdeducted;
    }
    else if(monthlyamount){
        housinglevy=monthlyamount*0.015;
        return housinglevy;
    }

  }
  one(30000);