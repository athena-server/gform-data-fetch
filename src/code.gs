function gform() {
    // Open a form by ID
    const form = FormApp.openByUrl(
        'https://docs.google.com/forms/d/1lbLbIy3Ph3eeSEEf--OLj17Vmg7y3unJqIWAwWsl5a4/edit'
        );
    
    //Delete all existing items
    formDeleteAllItems(form);

    // Update form properties via chaining.
    form.setTitle('Course Feedback')
        .setDescription('Please spare some time to give us your honest feedback of the course.')
        .setConfirmationMessage('Thanks for responding!')
        .setAllowResponseEdits(false)
        .setAcceptingResponses(true);

    // Format the course data into dropdown options
    const dropdownOptions = courses.map(course => `${course.courseId} - ${course.courseTitle}`);
  
    form.addTextItem()
        .setTitle("Batch")
        .setRequired(true);

    form.addListItem()
        .setTitle("Course")
        .setChoiceValues(dropdownOptions)
        .setRequired(true);
  
    form.addScaleItem()
        .setTitle("Rating")
        .setBounds(1,5)
        .setLabels('Lowest','Highest')
        .setRequired(true);
       
    form.addParagraphTextItem()
        .setTitle("Your Review")
        .setRequired(true);

    Logger.log("Form created: " + form.getEditUrl());
    Logger.log('Published URL: ' + form.getPublishedUrl());
}
  
function formDeleteAllItems(form){
    var index = form.getItems().length - 1;
    for(; index >= 0; index--){
        form.deleteItem(0);
    }
}