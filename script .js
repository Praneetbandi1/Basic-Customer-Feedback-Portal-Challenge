//U4636100
function submitCustomerFeedback(event){
event. preventDefault();
const name=document.getElementById('customerName').value;
    const rating =document.getElementById('customerRating').value;
    const comments=document.getElementById('customerComments').value;

    if(!name|| !rating || !comments) {
    alert('Please fill out all the fields.');
    }
    if(name!="" && comments!="") {

        const customerFeedbackHTML='<p>Customer Name:' + name + '<br>Customer Rating: '
        + rating + '<br>Customer Comments: ' + comments +'<p>';
        document.getElementById('customer-feedback-display').innerHTML+=customerFeedbackHTML;


    }

}
