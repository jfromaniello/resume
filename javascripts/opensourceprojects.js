$(function(){
  $.get("https://api.github.com/users/jfromaniello/repos")
    .done(function(repositories){
      var target = $("#oss");
      for(var i in repositories){
        var repo = repositories[i];
        // if(repo.watchers_count < 2 && repo.fork) continue;
        var rel = repo.watchers_count * (repo.fork ? repo.forks_count : 1);
        $("<a href='" + repo.url + "' title='" + repo.description + "' rel='" + rel + "'>" + repo.name + "</a><span> </span>")
            .appendTo(target);
      }
      // $("#oss a").tagcloud();
    });
});