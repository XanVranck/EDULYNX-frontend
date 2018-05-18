<template>
    <div id="chat" class="container">
    <h1>Vue School Chat Room</h1>
    <!-- Messages -->
    <div v-for="message in messages" :key="message.id" class="card">
        <div class="card-body">
        <!-- nickname -->
        <h6 class="card-subtitle mb-2 text-muted">{{ message.nickname }}</h6>
        <!-- content -->
        <p v-if="message !== edittedMessage" class="card-text">{{ message.text }}</p>
        <textarea v-else v-model="messageText" class="form-control"></textarea>
            <div v-if="message !== edittedMessage">
            <a v-on:click="deleteMessage(message)" href="#" class="card-link">delete</a>
            <a v-on:click="editMessage(message)" href="#" class="card-link">edit</a>
            </div>
            <div v-else>
            <a v-on:click="cancelEditing" href="#" class="card-link">cancel</a>
            <a v-on:click="updateMessage" href="#" class="card-link">update</a>
            </div>
        </div>
    </div>

    <hr>
    <!-- New Message -->
    <form v-if="!edittedMessage" @submit.prevent="storeMessage">
        <div class="form-group">
        <label>Message:</label>
        <textarea v-model="messageText" class="form-control"></textarea>
        </div>
        <div class="form-group">
        <label>Nickname:</label>
        <input v-model="nickname" class="form-control"/>
        </div>
        <button class="btn btn-primary">Send</button>
    </form>
    </div>
</template>

<script>  
import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDtpflIBl0UG1KPSC4cUX_dOllSRgcVhq8",
  authDomain: "chat-room-6208a.firebaseapp.com",
  databaseURL: "https://chat-room-6208a.firebaseio.com",
  projectId: "chat-room-6208a",
  storageBucket: "chat-room-6208a.appspot.com",
  messagingSenderId: "541616386687"
};

firebase.initializeApp(config);

const database = firebase.database();
const messagesRef = database.ref('messages')

  export default {
    name: 'Comments',
    data: () => ({
      messages: [],
      messageText: '',
      nickname: '',
      edittedMessage:null
    }),
    methods: {
      storeMessage () {
        messagesRef.push({text: this.messageText, nickname: this.nickname})
        this.messageText = ''
        }
    },
    created() {
        messagesRef.on('child_added', snapshot => this.messages.push({...snapshot.val(), id: snapshot.key}));                
    }
  }
</script>