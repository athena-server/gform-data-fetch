function gform() {
    // Open a form by ID
    const form = FormApp.openByUrl(
            gfomrUrl
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
    const dropdownOptionsCourse = courses.map(course => `${course.courseId} - ${course.courseTitle}`);

    form.addListItem()
        .setTitle("Semester")
        .setChoiceValues(semesters)
        .setRequired(true);

    form.addListItem()
        .setTitle("Course")
        .setChoiceValues(dropdownOptionsCourse)
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