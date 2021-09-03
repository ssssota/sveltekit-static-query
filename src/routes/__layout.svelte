<script>
  import { page } from '$app/stores';
</script>

<p>host: {$page.host}</p>
<p>path: {$page.path}</p>
<p>params: {JSON.stringify($page.params)}</p>
<p>query: {$page.query}</p>

<slot />
