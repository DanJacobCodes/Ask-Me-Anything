import DS from 'ember-data';

export default DS.Model.extend({
  answer_author: DS.attr(),
  answer_content: DS.attr(),
  question: DS.belongsTo('question', { async: true})
});
