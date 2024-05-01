const conversationData = [
    {
        userName: "user",
        userText: "การเดินทางในหมู่บ้าน Motionnian นี้ไม่ใช่เรื่องง่ายเลยพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "แต่ผลลัพธ์ที่ได้พี่ Theta ว่ามันคุ้มค่าสุด ๆ เลยนะ user ลองมองไปด้านหน้านู่นสิ",
    },
    {
        userName: "user",
        userText: "โอ้โหนั่นมันหมู่บ้าน Motionnian นี้พี่ Thata เรามาถึงเเล้ว",
    },
    {
        userName: "user",
        userText: "พี่ Theta ทำไมพี่ถึง.....",
    },
    {
        userName: "Theta",
        userText: "ฮ่ะ ฮ่ะ ฮ่ะ",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // If there are no more conversations, redirect to the specified URL
        window.location.href = "https://cdn-icons-png.flaticon.com/512/1505/1505465.png";
    }
}


