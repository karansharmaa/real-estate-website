var $ = function(id){return document.getElementById(id);} //simplifies accessing DOM elements
//this below is the array we use in the reachout.html file to add and display 
// the cities where the client is interested in buying a house
var arr = []; 
var para = $('interestedIn'); 
var addElem = function()
{
    var firstVal = $('arrayElement').value; 
    arr.push(firstVal); 
    $('arrayElement').value = "";
    console.log(arr); 

}
var displayElem = function()
{
    for(var i = 0; i < arr.length; i++)
    {
        para.innerHTML += arr[i] + " "; 
    }
}
//this corresponds to form 1
var submitForm = function()
{
    var title = $("title"); 
    console.log(title.value);
    var name = $("Name"); 
    console.log(name.value);
    var address = $("Address"); 
    console.log(address.value);
    var city = $("City");
    console.log(city.value);
    var province = $("Province");
    console.log(province.value);
    var PostalCode = $("PostalCode"); 
    console.log(PostalCode.value);
    var phoneNum = $("PhoneNumber"); 
    console.log(phoneNum.value);
    var Email = $("Email"); 
    console.log(Email.value);

    // 
    //

    //info vital to the form is needed or else throws an error alert
    if(title.value == "" || name.value == "" || phoneNum.value == "" || Email.value == "")
     {
        alert("Values vital to us contacting you have not been entered in the form. Please enter values."); 
     }
     else
     {
        //shows that the form has been submitted and then all info is cleared out
        confirm(title.value + " " + name.value + ", the form has now been submitted. Someone from our team will reach out to you soon. Thank you."); 
        title.value = ""; 
        name.value = ""; 
        address.value = ""; 
        city.value = ""; 
        province.value = ""; 
        PostalCode.value = ""; 
        phoneNum.value = ""; 
        Email.value = ""; 
        hear.value = ""; 
     }

}
//this corresponds to the mortgage calculator 
var calculatePayment = function() {
    //how much loan you are willing to take out
    var principal = parseFloat($("principal").value);
    console.log(principal);
    //amortization term in years 
    var termOfLoan = parseFloat($("termOfLoan").value);
    console.log(termOfLoan); 
    //APR interest rate
    var annualInterestRate = parseFloat($("annualInterestRate").value);
    console.log(annualInterestRate); 
    //annual income
    var annualIncome = parseFloat($("annualIncome").value); 
    console.log(annualIncome); 

    //if an unreasonable interest rate is input, the script doesn't go further
    if(annualInterestRate < 1.0 || annualInterestRate > 4.0)
    {alert("Invalid interest rate!"); }
  
    else
    {
        //
        var percentageRate = annualInterestRate / 1200; 
        console.log(percentageRate); 
        //monthly payment is calculated by coverting amortization term into months
        var lengthOfLoan = 12 * termOfLoan; 
        console.log(lengthOfLoan);
        //monthly payment is calculated
        var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate) , lengthOfLoan * -1)));
        monthlyPayment = monthlyPayment.toFixed(2);
        console.log(monthlyPayment); 

        var GDSR = ((monthlyPayment*12) + 4500) / annualIncome; 
        GDSR = GDSR.toFixed(4); 
        console.log(GDSR); 

        $("payment").value = "$ " + monthlyPayment;
        $("GDSR").value = GDSR*100 + "%"; 
        alert("Your estimated monthly payment would be: $" + monthlyPayment
       + " with " + GDSR*100 + "% of your yearly income going towards the mortgage.");
    }
    
}