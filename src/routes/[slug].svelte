<script>
  const links = [
    './',
    './any?key3=value3',
  ];
</script>

<ul>
  {#each links as link (link)}
    <li><a href={link}>{link}</a></li>
  {/each}
</ul>
