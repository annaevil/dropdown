
function openTab(evt, tabName) {
  $('.field__content').hide()
  $('.field__tab').removeClass('field__tab--active')
  $('#' + tabName).show()
  $(evt.currentTarget).addClass('field__tab--active')
}

$('#searchInput').on('click', function(event) {
  event.stopPropagation()
  $('#searchBox').show()
})

$(document).on('click', function(event) {
  const searchInput = $('#searchInput')[0]
  const searchBox = $('#searchBox')[0]
  const isCheckbox = $(event.target).hasClass('field__checkbox')
  const isRadio = $(event.target).hasClass('field__radio')
  const isTab = $(event.target).hasClass('field__tab')
  const isInsideDropdownContent = $(event.target).closest('.field__dropdown__content').length > 0
  
  if (event.target !== searchInput && event.target.parentNode !== searchBox && !isCheckbox && !isRadio && !isTab && !isInsideDropdownContent) {
    $('#searchBox').hide()
  }
});

$(document).ready(function() {
  $('.field__checkbox').on('change', function() {
    const checkboxId = $(this).attr('id')
    const tagName = $(this).next('label').text().trim()
    const tagsContainer = $('.field__dropdown__content-tags')

    if ($(this).prop('checked')) {
      const tagElement = $("<div class='tag'></div>")
        .text(tagName)
        .append("<span class='tag-close'>&#10006;</span>")

      tagElement.find('.tag-close').on('click', function(event) {
        event.stopPropagation()
        $(this).parent().remove()
        $('#' + checkboxId).prop('checked', false)
        updateSelectedCount()
      });

      tagsContainer.append(tagElement);
    } else {
      const existingTag = tagsContainer.find('.tag:contains("' + tagName + '")')
      existingTag.remove()
      updateSelectedCount()
    }

    updateSelectedCount()
  });

  function updateSelectedCount() {
    const selectedCount = $('.field__checkbox:checked').length
    if (selectedCount > 0) {
      $('#selectedCount').text(selectedCount)
      $('#selectedCount').show()
    } else {
      $('#selectedCount').hide()
    }
  }
})

document.getElementById('searchInput').addEventListener('click', function(event) {
  event.stopPropagation()
  document.getElementById('searchBox').style.display = 'block'
})

document.addEventListener('click', function(event) {
  const searchInput = document.getElementById('searchInput')
  const searchBox = document.getElementById('searchBox')
  if (event.target !== searchInput && !searchBox.contains(event.target)) {
    searchBox.style.display = 'none'
  }
})

function updateSelectedCount() {
  const selectedCount = $('.field__checkbox:checked').length
  if (selectedCount > 0) {
    $('#selectedCount').text(selectedCount)
    $('#selectedCount').show()
  } else {
    $('#selectedCount').hide()
  }
}
  updateSelectedCount()

$('.field__checkbox').on('change', function() {
  updateSelectedCount()
})


$('.field__dropdown__content-tags').on('click', function(event) {
  event.stopPropagation()
})

$(document).on('click', function(event) {
  const searchInput = $('#searchInput')[0]
  const searchBox = $('#searchBox')[0]
  const isCheckbox = $(event.target).hasClass('field__checkbox')
  const isRadio = $(event.target).hasClass('field__radio')
  const isTab = $(event.target).hasClass('field__tab')
  const isInsideDropdownContent = $(event.target).closest('.field__dropdown__content').length > 0

  if (event.target !== searchInput && event.target.parentNode !== searchBox && !isCheckbox && !isRadio && !isTab && !isInsideDropdownContent) {
    $('#searchBox').hide()
  }
})
