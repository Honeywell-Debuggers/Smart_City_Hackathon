

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSikv78JVQHaQtcxXeq9YV5I9-8GrlxWQ",
  authDomain: "numberdetection-9d030.firebaseapp.com",
  databaseURL: "https://numberdetection-9d030-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "numberdetection-9d030",
  storageBucket: "numberdetection-9d030.appspot.com",
  messagingSenderId: "675075257427",
  appId: "1:675075257427:web:7cf6a00c0f54eeac1d42a6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getdetails() 
{
firebase.database().ref('Vehicle').on('value',(data)=>{
   let Vehicle = data.val();
   let flag = 0
    for(const vech in Vehicle)
    {
        if(Vehicle[vech].Vehicle_id === document.getElementById('vecid').value)
        {
            flag = 1;
        document.getElementById('details').innerHTML += `
        <tr> <th colspan="2"> <h2>Vehicle Details</h2></th></tr>               
        <tr>
        <td>Vehicle_ID     </td> 
        <td> ${Vehicle[vech].Vehicle_id}</td> 
        </tr>
        <tr>
        <td>Vehicle_Owner     </td>
        <td> ${Vehicle[vech].owner}</td>
        </tr>  
        <tr>
        <td>Owner_ADHAR_NO     </td>
        <td> ${Vehicle[vech].AdharNo}</td>
        </tr>  
        <tr>
        <td>Vehicle_Class   </td> 
        <td> ${Vehicle[vech].Vehicle_Class} </td>
        </tr>
        <tr>
        <td>Manufacture       </td>
        <td> ${Vehicle[vech].Manufacturer}</td>
        </tr>
        <tr>
        <td>Model            </td> 
        <td> ${Vehicle[vech].Model}</td>
        </tr>
        <tr>
        <td>Type            </td> 
        <td> ${Vehicle[vech].Type}</td>
        </tr> 
        <tr>
        <td>Year            </td> 
        <td> ${Vehicle[vech].Year}</td>
        </tr>
        <tr>
        <td> Colour          </td>
        <td> ${Vehicle[vech].Colour}</td>
        </tr> ` ;
       }
    }
    if(!flag)
    {
        alert("No DATA FOUND");
    }
    
})
}
