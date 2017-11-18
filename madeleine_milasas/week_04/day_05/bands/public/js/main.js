// Prompt confirmation message before deleting from database

$('#delete-button').on('click', function (e) {
  const urlName = $(this).data('name')
  console.log( urlName );
  const prompt = 'Are you sure you want to delete this entry?'
  if (confirm(prompt)) {
    window.location = `/bands/${ urlName }/delete`;
  }
});
