(() => {
  const Kenya_Popular_Schools = [
    "Banda School",
    "Braeburn School Nairobi",
    "Greensteds International School",
    "Hillcrest International Schools",
    "International School of Kenya",
    "Kenton College Preparatory School",
    "Pembroke House",
    "Peponi House Preparatory School",
    "Pangani Girls High School",
    "Alliance Girls",
    "Mangu High",
    "Alliance High",
    "Maseno School",
    "Kapsabet Boys",
    "Limuru Girls",
    "Moi Girls Eldoret",
    "Lenana School",
    "MaryHill High School",
    "Nairobi School",
    "Nakuru Girls",
    "Kenya High",
    "Starehe Boys",
    "Maranda High",
  ];

  PlaceholderTypingEffect({
    element: document.getElementById("school-search"),
    strings: Kenya_Popular_Schools,
    prepend: 'e.g. "',
    append: '"',
  }).begin({ delay: 1000 });
})();
