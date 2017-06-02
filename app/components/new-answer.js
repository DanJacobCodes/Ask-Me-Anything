import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
   answerFormShow() {
     this.set('addNewAnswer', true);
   },
   saveAnswer() {
    var params = {
      answer_author: this.get('answer_author'),
      answer_content: this.get('answer_content')
    };
    this.set('addNewAnswer', false);
    this.sendAction('saveAnswer', params);
  }
 }
});
