function reverse(text) {
  if (text.length <= 1) {
    return text;
  }
  const rtnText = reverse(text.slice(1));
  return rtnText + text[0];
}

console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
