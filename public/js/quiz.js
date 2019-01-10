let num = 0;
let beerResult = '';
let profileName = '';
let newFlavorProfile;

let quizQuestions = [
  {
    question: 'Are You Looking To Get Drunk And Don\'t Care About Taste?',
    options: ['Yes', 'No'],
    connectsTo: [18, 1],
    result1: 'American Macro Brew'
  },
  {
    question: 'Are You Drinking Outside?',
    options: ['Yes', 'No'],
    connectsTo: [2, 3]
  },
  {
    question: 'Is It Hot Outside?',
    options: ['Yes', 'No'],
    connectsTo: [6, 4]
  },
  {
    question: 'Is It A Cold Winter Night?',
    options: ['Yes', 'No'],
    connectsTo: [5, 8]
  },
  {
    question: 'Are You Running Around Breaking A Sweat?',
    options: ['Yes', 'No'],
    connectsTo: [9, 7]
  },
  {
    question: 'Are You Looking To Get Pretty Drunk?',
    options: ['Yes', 'No'],
    connectsTo: [17, 18],
    result2: 'Porter/Stout'
  },
  {
    question: 'Fun & Funky? Or Easy & Refreshing?',
    options: ['Fun', 'Easy'],
    connectsTo: [13, 18],
    result2: 'Farmhouse/Saison'
  },
  {
    question: 'Are You Having Food While Drinking?',
    options: ['Yes', 'No'],
    connectsTo: [10, 11]
  },
  {
    question: 'Do You Want Something Hoppy?',
    options: ['Yes', 'No'],
    connectsTo: [18, 12],
    result1: 'IPA'
  },
  {
    question: 'Do You Enjoy A Challenge?',
    options: ['Yes', 'No'],
    connectsTo: [18, 18],
    result1: 'Farmhouse/Saison',
    result2: 'Pilsner'
  },
  {
    question: 'Light & Refreshing Food? Or Heaving & Satisfying Food?',
    options: ['Light', 'Heavy'],
    connectsTo: [18, 14],
    result1: 'Wheat Beer'
  },
  {
    question: 'Do You Like Hoppy Beers?',
    options: ['Yes', 'No'],
    connectsTo: [18, 18],
    result1: 'Pale Ale',
    result2: 'Wheat Beer'
  },
  {
    question: 'Do You Like Sour or Fruity Tastes?',
    options: ['Yes', 'No'],
    connectsTo: [18, 16],
    result1: 'Sour/Fruit'
  },
  {
    question: 'Do You Like A Bitter Hop Bite?',
    options: ['Yes', 'No'],
    connectsTo: [18, 18],
    result1: 'Pilsner',
    result2: 'Wheat Beer'
  },
  {
    question: 'Are You Eating A Meal Or Dessert?',
    options: ['Meal', 'Dessert'],
    connectsTo: [15, 18],
    result2: 'Sour/Fruit'
  },
  {
    question: 'Hoppy Or Roasty?',
    options: ['Hoppy', 'Roasty'],
    connectsTo: [18, 18],
    result1: 'IPA',
    result2: 'Porter/Stout'
  },
  {
    question: 'Is Hops OK?',
    options: ['Yes', 'No'],
    connectsTo: [18, 18],
    result1: 'Pale Ale',
    result2: 'Porter/Stout'
  },
  {
    question: 'Do You Like Roasted Coffee?',
    options: ['Yes', 'No'],
    connectsTo: [18, 18],
    result1: 'Porter/Stout',
    result2: 'Barleywine'
  }
];

$('#question').text(quizQuestions[num].question);
$('#option1').text(quizQuestions[num].options[0]);
$('#option2').text(quizQuestions[num].options[1]);
$('#new-profile').hide();

let setQuestion = function () {
  if (num >= 18) {
    $('#question').html(`Good Work.<br>Now Name Your New Flavor Profile:`);
    $('#option1').hide();
    $('#option2').hide();
    $('#new-profile').show();
  }
  else {
    $('#question').text(quizQuestions[num].question);
    $('#option1').text(quizQuestions[num].options[0]);
    $('#option2').text(quizQuestions[num].options[1]);
  }
}

$('#option1').on('click', function () {
  if (quizQuestions[num].connectsTo[0] === 18) {
    $('#new-profile').show();
    beerResult = quizQuestions[num].result1;
  }
  num = quizQuestions[num].connectsTo[0];
  setQuestion();
})

$('#option2').on('click', function () {
  if (quizQuestions[num].connectsTo[1] === 18) {
    $('#new-profile').show();
    beerResult = quizQuestions[num].result2;
  }
  num = quizQuestions[num].connectsTo[1];
  setQuestion();
})

$(document).on("click", "#save-profile", function () {
  profileName = $('#new-profile-name').val().trim();
  newFlavorProfile = {
    profileName: profileName,
    category: beerResult,
  };
  sessionStorage.setItem('category', beerResult);
  $.post("/api/newprofile", newFlavorProfile).then(() => window.location.replace(`/recommendations`))
});