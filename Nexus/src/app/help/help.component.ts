import { Component, OnInit } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment';
import { gptModels } from '../models/constants';
import { ChatWithBot, ResponseModel } from '../models/gpt-response';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  chatConversation: ChatWithBot[] = [];
  response!: ResponseModel | undefined;
  gptModels = gptModels;
  promptText = '';
  showSpinner = false;

  constructor() {}

  ngOnInit(): void {}

  checkResponse() {
    this.pushChatContent(this.promptText, 'You', 'person');
    this.invokeGPT();
  }

  pushChatContent(content: string, person: string, cssClass: string) {
    const chatToPush: ChatWithBot = {
      person: person,
      response: content,
      cssClass: cssClass,
    };
    this.chatConversation.push(chatToPush);
  }

  getText(data: string) {
    return data.split('\n').filter((f) => f.length > 0);
  }

  async invokeGPT() {
    if (this.promptText.length < 2) return;

    const prompt = `I have an app called Nexus. It is a platform which combines Cloud storage platforms like Google Drive, One Drive and shows usage statistics about them. This is Nexus Gthub README "Welcome to Nexus! 🚀🌩️👨‍💻
    Inspiration
    We were inspired to create Nexus because we noticed a lack of user-friendly cloud storage dashboards that could effectively visualize the contents of different cloud storage providers. We wanted to create a platform that could provide real-time monitoring and support for multiple cloud storage providers while also ensuring the privacy and security of sensitive data.
    
    What it does
    Nexus is a dashboard for managing cloud storage environments, such as Google Drive, OneDrive, and Dropbox. It provides a unified view of your content across multiple cloud storage providers, an easy-to-use interface for managing and organizing cloud storage resources, and robust security features to ensure the privacy and security of sensitive data.
    
    Functions ⚒️
    📊 Real-time monitoring and visualization of cloud storage usage metrics
    🌐 Support for multiple cloud storage providers
    💻 Easy-to-use interface for managing and organizing cloud storage resources
    🔒 Robust security features to ensure the privacy and security of sensitive data.
    How we built it
    We built Nexus using a combination of Angular on the frontend, REST APIs on the backend, and Sass (or Less) for CSS preprocessing. We used Angular Material to provide a modern and responsive UI, and we integrated the backend with different cloud storage providers using their APIs. We also prioritized security throughout the development process, implementing robust measures to protect sensitive data.
    
    Challenges we ran into
    One of the main challenges we faced was integrating the APIs of different cloud storage providers, which required significant research and experimentation to get right. We also had to deal with complex data structures and large datasets, which posed additional challenges in terms of performance and scalability.
    
    Accomplishments that we're proud of
    We're proud of creating a dashboard that provides a user-friendly and secure way to manage cloud storage resources across multiple providers. We're also proud of the technical achievements we made in terms of integrating multiple cloud storage providers and creating a responsive and intuitive UI.
    
    What we learned
    We learned a lot about the complexities of working with cloud storage systems and the importance of robust security measures to protect sensitive data. We also gained valuable experience in integrating different APIs and working with large datasets.
    
    What's next for Nexus
    In the future, we plan to add support for more cloud storage providers and additional features to further enhance the usability and functionality of Nexus. We also plan to continue improving the security of the platform and staying up-to-date with the latest best practices in cloud storage and web application development.
    
    Tech Stack
    This project uses the following technologies:
    
    Angular on the frontend
    REST APIs on the backend using Laravel
    Sass for CSS preprocessing
    Design
    The design for this project can be found on Figma:
    https://www.figma.com/file/dlP4wMXdzC0pikoE5FA4fC/Nexus?node-id=0%3A1&t=ToEznYobRr1aghEN-1
    
    License
    This project is licensed under the MIT License." I am using you as a chatbot. If I ask about a company, answer as a chatbot, please: ${this.promptText}\n`;

    try {
      this.response = undefined;
      let configuration = new Configuration({ apiKey: environment.apiKey });
      let openai = new OpenAIApi(configuration);

      let requestData = {
        model: 'text-davinci-003', //'text-davinci-003',//"text-curie-001",
        prompt: prompt, //this.generatePrompt(animal),
        temperature: 0.95,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
      this.showSpinner = true;
      let apiResponse = await openai.createCompletion(requestData);

      this.response = apiResponse.data as ResponseModel;
      this.pushChatContent(
        this.response.choices[0].text.trim(),
        'Nexus Bot',
        'bot'
      );
      debugger;
      this.showSpinner = false;
    } catch (error: any) {
      this.showSpinner = false;
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
      }
    }
  }
}
