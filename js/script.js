$(function() {
  $('.icon').carousel();

  var html = $('#user').html();
  var data = {
    name: 'Kateryna Dzivaltovska',
    job: 'Teacher of the English language',
    reason: 'My reasons to study Frontend:',
    firstReason: 'It`s awesome',
    secondReason: 'It brings money',
    thirdReason: 'Being a teacher su... isn`t much fun=)',
    contactTitle: 'My phone number:',
    contactNumber: '+38 093 99 584 71',
    vkontakte: 'My profile on VKontakte:',
    link: 'You can find me here',
    feedbackTitle: 'My feedback:',
    feedback: 'I can help you learn English with pleasure and fun'
  };
  var content = tmpl(html, data);

  $('body').append(content);





});
