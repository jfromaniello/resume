$(function(){
  $.ajax({
    url: "https://api.github.com/users/jfromaniello/repos?per_page=1000",
    dataType: "jsonp"
  }).done(function(result){
      var repositories = result.data,
          target = $("#oss");
      for(var i in repositories){
        var repo = repositories[i];
        $("<a href='" + repo.html_url + "'" +
             "title='" + repo.description + " (forks:" + repo.forks + ", watchers: " + repo.watchers_count + ")'>" + 
             repo.name + "</a><span> </span>").appendTo(target);
      }
    });
});