# AI Model Management

Before starting to create AI services, you first need to configure AI model providers. APIPark supports over 100 AI models, including OpenAI, Anthropic, AWS Bedrock, Google Gemini, etc. Once you configure the providers, you can choose different models to create AI services and manage authorization information and cost statistics for all AI services in APIPark.

Go to the **System Settings** module, and select **AI Model Management** from the sidebar, where you can see all AI providers supported by APIPark.

![](images/2024-10-26-14-37-38.png)

Taking OpenAI integration as an example, click the settings button, and in the pop-up window:

- Choose a **Default AI Model**: The system will automatically set a default AI model for the API when creating AI services, reducing the number of operations required from the user.
- Fill in the **Provider Configuration**: Each provider has different configuration information. The system will automatically generate the necessary configuration information based on the provider you choose. This information can typically be obtained from the provider's Open API management backend, and you can find a quick link to the provider's official website in the lower-left corner of the pop-up window.

> 💡 If APIPark does not support your AI provider, feel free to [🔗 submit an Issue to us](https://github.com/APIParkLab/APIPark/issues/new)

![](images/2024-10-26-15-10-43.png)