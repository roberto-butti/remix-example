import CallToAction from '../components/CallToAction'

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <CallToAction
            url="https://remix.run/tutorials/blog"
            title="15m Quickstart Blog Tutorial" />
        </li>
        <li>
          <CallToAction
            url="https://remix.run/tutorials/jokes"
            title="Deep Dive Jokes App Tutorial" />
        </li>
        <li>
          <CallToAction
            url="https://remix.run/docs"
            title="Remix Docs" />
        </li>
      </ul>
    </div>
  );
}
