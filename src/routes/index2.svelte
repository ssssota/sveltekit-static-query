<script>
  const links = [
    './',
    './index2?key2=value2',
  ];
</script>

<ul>
  {#each links as link (link)}
    <li><a href={link}>{link}</a></li>
  {/each}
</ul>
