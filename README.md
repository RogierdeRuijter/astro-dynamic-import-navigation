# Reproduce "dynamic import module failed" error in Safari

- Run `npm run dev`
- Open Safari and navigate to `http://localhost:4321` or your url
- Open developer console
- Set logs to be presistent accross reloads
  - Console tab -> Settings (circle with 3 dashes) -> Check "Preserve log"
- Copy the this url to the clipboard: `http://localhost:4321/page1`
- Reload the page
- Quickly paste the url in the address bar and hit enter
- Observe the error in the console: "dynamic import module failed"

Note: You might have to repeat moving back and forward between pages a few times
to see the error.

