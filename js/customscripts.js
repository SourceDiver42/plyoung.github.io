$('#mysidebar').height($(".nav").height());

$(document).ready(function() {
    var h = $(window).height();
    if (h > 800) {$( "#mysidebar" ).attr("class", "nav affix");}
    $('[data-toggle="tooltip"]').tooltip({placement : 'top'});

    anchors.add('h2,h3,h4,h5');

    $("#contact-form").submit(function()
    {
        var email = $("#email").val();
        var name = $("#name").val();
        var msg = $("#msg").val();
        var subj = "PLYoung Contact Form";

         $.ajax(
         {
             url: atob('aHR0cHM6Ly9mb3Jtc3ByZWUuaW8vcGx5b3VuZ0BnbWFpbC5jb20='),
             method: "POST",
             data: {message: "msg",},
             data: {name:name, _replyto:email, _subject:subj, message:msg},
             dataType: "json"
         }); 

        $("#contact-form").hide();
        $("#result").show();
        return false;
    });
});

$(function() {
    var json, tabsState;
    $('a[data-toggle="pill"], a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        var href, json, parentId, tabsState;

        tabsState = localStorage.getItem("tabs-state");
        json = JSON.parse(tabsState || "{}");
        parentId = $(e.target).parents("ul.nav.nav-pills, ul.nav.nav-tabs").attr("id");
        href = $(e.target).attr('href');
        json[parentId] = href;

        return localStorage.setItem("tabs-state", JSON.stringify(json));
    });

    tabsState = localStorage.getItem("tabs-state");
    json = JSON.parse(tabsState || "{}");

    $.each(json, function(containerId, href) {
        return $("#" + containerId + " a[href=" + href + "]").tab('show');
    });

    $("ul.nav.nav-pills, ul.nav.nav-tabs").each(function() {
        var $this = $(this);
        if (!json[$this.attr("id")]) {
            return $this.find("a[data-toggle=tab]:first, a[data-toggle=pill]:first").tab("show");
        }
    });
});
