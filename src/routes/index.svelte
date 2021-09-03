<script>
  const links = [
    './index2',
    './any',
    './?key=value',
  ];
</script>

<ul>
  {#each links as link (link)}
    <li><a href={link}>{link}</a></li>
  {/each}
</ul>
