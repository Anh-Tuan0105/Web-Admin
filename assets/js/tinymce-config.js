const initTinimce = (selector) => {
    tinymce.init({
        selector: selector,
        plugins: 'charmap code codesample emoticons help',
        toolbar: 'undo redo | blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | charmap code codesample emoticons | help'
    });
}

initTinimce('[textarea-mce]');
