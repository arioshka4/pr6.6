function checkIt() {
    if (document.forms.mailer.Name.value != "") {
    } else {
      alert("\nОбласть \"Ім'я\" в формі. \nБудь ласка, введіть своє ім'я.");
      document.forms.mailer.Name.focus();
      return false;
    }
    
    if (document.forms.mailer.Email.value != "") {
    } else {
      alert('\nОбласть "Email" у формі. \nБудь ласка, введіть свій email.');
      document.forms.mailer.Email.focus();
      return false;
    }
  
    if (document.forms.mailer.Subject.value != "") {
    } else {
      alert('\nОбласть "Тема" в формі. \nБудь ласка, введіть тему.');
      document.forms.mailer.Subject.focus();
      return false;
    }
  
    if (document.forms.mailer.Message.value != "") {
      Message;
      return true;
    } else {
      alert(
        '\nОбласть "Повідомлення" в формі. \n\nБудь ласка, напишіть повідомлення.',
      );
      document.forms.mailer.Message.focus();
      return false;
    }
  }
  
  function msg() {
    let q = document.getElementById("q");
    document.mailer.action = `mailto:${q.value}`;
    mailtoandSubject =
      "?Subject=" +
      document.mailer.Subject.value +
      "&Body=" +
      document.mailer.Message.value;
  }
  