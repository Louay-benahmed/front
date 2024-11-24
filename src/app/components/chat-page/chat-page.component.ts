import { Component, OnInit } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-chat-page',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  showOtherDiv: boolean = false; // Controls visibility of the other div
  showdescriptionDiv: boolean = false; // Controls visibility of the other div
  showfeedbackDiv: boolean = false; // Controls visibility of the other div


  receiving = false;
  chatId = crypto.randomUUID();
  systemPrompt = "You are Bugs Bunny, an extremely smart school teacher, who can solve any question but only provides hints instead of full answers. Speak as if addressing a 10-year-old, and maintain a playful, humorous tone in your responses. Ask the user's name and then address them with the name in the conversation";

  ngOnInit(): void {
    this.welcomeMessageFirstTime();
  }

  createMessageElement(text: string, alignment: string) {
    const messageElement = document.createElement("div");
    messageElement.className = `inline-block my-2.5 p-2.5 rounded-md ${
      alignment === "left" ? "bg-purple-100 text-black" : "bg-blue-200 text-black"
    } ${alignment === "left" ? "self-start" : "self-end"} border ${
      alignment === "left" ? "border-purple-200" : "border-blue-300"
    }`;
    messageElement.textContent = text;
    return messageElement;
  }

  connectWebSocket(message: string) {
    this.receiving = true;
    const url = "wss://backend.buildpicoapps.com/api/chatbot/chat";
    const websocket = new WebSocket(url);

    websocket.addEventListener("open", () => {
      websocket.send(
        JSON.stringify({
          chatId: this.chatId,
          appId: "write-spend",
          systemPrompt: this.systemPrompt,
          message: message,
        })
      );
    });

    const messageElement = this.createMessageElement("", "left");
    const chatbox = document.getElementById("chatbox");
    if (chatbox) {
      chatbox.appendChild(messageElement);
    }

    websocket.onmessage = (event) => {
      if (chatbox) {
        messageElement.textContent += event.data;
        chatbox.scrollTop = chatbox.scrollHeight;
      }
    };

    websocket.onclose = (event) => {
      if (event.code === 1000) {
        this.receiving = false;
      } else {
        if (chatbox) {
          messageElement.textContent += "Error getting response from server. Refresh the page and try again.";
          chatbox.scrollTop = chatbox.scrollHeight;
        }
        this.receiving = false;
      }
    };
  }

  sendMessage() {
    const messageInput = document.getElementById("messageInput") as HTMLInputElement;
    if (messageInput && !this.receiving && messageInput.value.trim() !== "") {
      const messageText = messageInput.value.trim();
      messageInput.value = "";
      const messageElement = this.createMessageElement(messageText, "right");
      const chatbox = document.getElementById("chatbox");
      if (chatbox) {
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
      }

      this.connectWebSocket(messageText);
    }
  }

  welcomeMessageFirstTime() {
    const welcomeMessage = "Hello Doc! What's your name? I am Bugs Bunny, your helpful hint-ster!";
    const messageElement = this.createMessageElement(welcomeMessage, "left");
    const chatbox = document.getElementById("chatbox");
    if (chatbox) {
      chatbox.appendChild(messageElement);
    }
  }



  toggleOtherDiv(): void {
    this.showOtherDiv = !this.showOtherDiv; // Toggles the visibility
  }
  toggleOtherDivdescription(): void {
    this.showdescriptionDiv = !this.showdescriptionDiv; // Toggles the visibility
  }
  togglefeedbackDiv(): void {
    this.showfeedbackDiv = !this.showfeedbackDiv; // Toggles the visibility
  }
}
