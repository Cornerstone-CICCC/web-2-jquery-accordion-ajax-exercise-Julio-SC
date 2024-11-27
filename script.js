$(function() {
  $('.accordion-header').on('click', function() {
    $(this).next('.accordion-content').slideToggle(
      function () {
        $(this).siblings('.accordion-content').hide('slow')
      }
    )
  })


  $('.todos').find('button').on('click', function() {
   $.ajax({
    url: 'https://dummyjson.com/todos',
    type: 'GET',
    success: function(response) {
      const data = response.todos
      data.forEach(element => {
        const todo =element.todo
        $('ul').append(`<li>${todo} </li>`)

        console.log(todo)
      });

    },
    error: function(error) {

    }

   })
 })
})

