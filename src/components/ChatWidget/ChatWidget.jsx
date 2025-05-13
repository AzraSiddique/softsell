import { Component } from 'react';
import './ChatWidget.css';

class RealChatWidget extends Component {
  presetQuestions = [
    'How do I sell my license?',
    'What types of software do you accept?',
    'Is there a fee for evaluations?',
    'How long does the process take?',
    'What documents do I need?',
    'Do you accept bulk licenses?',
    'Is there a minimum payout?',
    'Can I cancel after submitting?',
    'How secure is my information?',
    'Do I get a certificate or proof of transfer?',
  ];

  mockAnswers = {
    'How do I sell my license?':
      'Simply submit the details of your license, and we’ll provide a quote instantly!',
    'What types of software do you accept?':
      'We accept most major business software licenses — productivity, antivirus, CRM, and more.',
    'Is there a fee for evaluations?':
      'No, evaluations are completely free.',
    'How long does the process take?':
      'Most transactions are completed within 24-48 hours.',
    'What documents do I need?':
      'Usually, just your proof of purchase and the license key.',
    'Do you accept bulk licenses?':
      'Yes, we specialize in bulk license transfers.',
    'Is there a minimum payout?':
      'No minimums! We value each license individually.',
    'Can I cancel after submitting?':
      'Yes, you can cancel anytime before final approval.',
    'How secure is my information?':
      'All data is encrypted and processed securely.',
    'Do I get a certificate or proof of transfer?':
      'Yes, we provide official documentation post-sale.',
  };

  state = {
    messages: [],
    isChatOpen: true,
    showAllQuestions: false,
  };

  toggleChatWidget = () => {
    this.setState(prevState => ({ isChatOpen: !prevState.isChatOpen }));
  };

  toggleShowQuestions = () => {
    this.setState(prevState => ({ showAllQuestions: !prevState.showAllQuestions }));
  };

  askQuestion = question => {
    const userMessage = { role: 'user', content: question };
    const botMessage = {
      role: 'bot',
      content: this.mockAnswers[question] || 'Sorry, I don’t have an answer for that.',
    };
    this.setState(prevState => ({
      messages: [...prevState.messages, userMessage, botMessage],
    }));
  };

  renderMessages = () => {
    const { messages } = this.state;

    return (
      <div className="chat-messages-container">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.role === 'user' ? 'user-message' : 'bot-message'}`}
          >
            {msg.content}
          </div>
        ))}
      </div>
    );
  };

  renderPresetQuestions = () => {
    const { showAllQuestions } = this.state;
    const displayQuestions = showAllQuestions
      ? this.presetQuestions
      : this.presetQuestions.slice(0, 4);

    return (
      <div className="preset-buttons-container">
        {displayQuestions.map((question, index) => (
          <button
            key={index}
            type="button"
            onClick={() => this.askQuestion(question)}
            className="preset-question-button"
          >
            {question}
          </button>
        ))}

        <button
          type="button"
          className="toggle-question-button"
          onClick={this.toggleShowQuestions}
        >
          {showAllQuestions ? 'Show Less ▲' : 'Show More ▼'}
        </button>
      </div>
    );
  };

  render() {
    const { isChatOpen } = this.state;

    return (
      <div className="real-chat-widget-wrapper">
        <button className="chat-toggle-button" onClick={this.toggleChatWidget}>
          {isChatOpen ? '✕' : '💬'}
        </button>

        {isChatOpen && (
          <div className="real-chat-widget-container">
            <h1 className="chat-widget-heading">Ask SoftSell AI</h1>
            {this.renderPresetQuestions()}
            {this.renderMessages()}
          </div>
        )}
      </div>
    );
  }
}

export default RealChatWidget;
