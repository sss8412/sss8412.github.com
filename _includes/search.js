---
---
var docs = 
[ 
{% for post in site.posts limit:10 %}
  {% include post.json %},
{% endfor %}
];
// init lunr
var idx = lunr(function () {
  this.field('title', 10);
  this.field('content');
})
// add each document to be index
for(var index in docs) {
  idx.add(docs[index]);
}
