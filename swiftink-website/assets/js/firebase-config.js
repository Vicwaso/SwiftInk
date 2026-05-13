// Firebase Configuration - REPLACE with your actual Firebase config
// Get this from: https://console.firebase.google.com -> Your Project -> Project Settings -> Your Web App
const firebaseConfig = {
    apiKey: "AIzaSyD_xxxxxxxxxxxxxxxxxxxxx",  // Replace with your real API Key
    authDomain: "swiftink-dashboard.firebaseapp.com",  // Replace with your auth domain
    projectId: "swiftink-dashboard",  // Replace with your project ID
    storageBucket: "swiftink-dashboard.firebasestorage.app",  // Replace with your storage bucket
    messagingSenderId: "1234567890",  // Replace with your sender ID
    appId: "1:1234567890:web:abc123def456"  // Replace with your app ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to save order to database
async function saveOrderToDatabase(orderData) {
    try {
        const urgency = orderData.urgency === 'Same day' || orderData.urgency === 'Next day';
        
        const orderToSave = {
            clientName: orderData.clientName || "",
            phone: orderData.phone || "",
            serviceType: orderData.serviceType || "",
            quantity: orderData.quantity || "",
            deadline: orderData.deadline || "",
            message: orderData.message || "",
            urgency: urgency,
            status: 'new',
            createdAt: new Date().toISOString(),
            depositPaid: false,
            balancePaid: false,
            notes: [],
            source: 'website'
        };
        
        const docRef = await db.collection('orders').add(orderToSave);
        console.log('Order saved to Firebase with ID:', docRef.id);
        return true;
    } catch(error) {
        console.error('Error saving order:', error);
        return false;
    }
}