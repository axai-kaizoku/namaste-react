import React, { useCallback, useMemo, useRef, useState } from "react";

export const Contact = () => {
  const [feedback, setFeedback] = useState("")
  const [copied, setCopied] = useState("")
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const pass = e.target[1].value;
    console.log(name, pass);
  }
  console.log("Parent Rendered")

  const [state, newS, ...rest] = "197698"
  const videoRef = useRef()


  const data = useMemo(() => {
    console.log("Data")
    return [1, 2, 3, 4, 5]
  }, [])

  const handleSomething = useCallback(() => {
    //
  }, [])

  return (
    <div className="h-[80vh] w-full">
      <h1 className="text-2xl font-bold text-center">Contact</h1>

      <div className="w-40 mx-auto h-full">
        <form onSubmit={handleSubmit} className="space-y-5 my-4">
          <div className="flex items-center gap-2">
            <label htmlFor="username">Name: </label>
            <input
              type="text"
              placeholder="Name"
              id="username"
              className="border border-foreground"
              required
              name="username"
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              className="border border-foreground"
              name="email"
            />
          </div>
          <div className="flex items-start gap-2 w-full">
            <label htmlFor="feedback">Feedback: </label>
            <textarea
              id="feedback"
              className="border p-2 text-sm border-foreground rounded-md min-w-[200px] min-h-[80px] resize"
              required
              cols={30}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              name="feedback"
              placeholder="Enter your feedback here..."
            ></textarea>

          </div>

          <p className="text-xs">hint: username=anything, password=anything</p>

          <div>

            <button onClick={() => navigator.clipboard.writeText(feedback)} type="button">Copy</button>
            <button onClick={() => navigator.share({ text: "Hey", title: "Sharing demo" })} type="button">Share</button>
            <button onClick={() => {
              // const pos = navigator.geolocation.getCurrentPosition((p) => setCopied(JSON.stringify(p)));

              navigator.geolocation.watchPosition((p) => setCopied(JSON.stringify(p)));

              // console.log(pos);
            }} type="button">Get Position</button>
            <button type="button" onClick={() => navigator.mediaDevices.getUserMedia({ audio: true })}>Audio</button>

            <button type="button" onClick={async () => {
              try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                videoRef.current.srcObject = stream;
              } catch (err) {
                console.error("Error accessing camera: ", err);
              }
            }}>Video</button>
            <video ref={videoRef} autoPlay playsInline muted></video>
            <button type="button" onClick={() => { videoRef.current.srcObject = null; videoRef.current.pause() }}>Stop</button>
            {/* {(() => {

              console.log('A');

              const div = document.createElement('div');
              const observer = new MutationObserver(() => {
                console.log('B');
                Promise.resolve().then(() => console.log('C'));
                setTimeout(() => console.log('D'), 0);
              });
              observer.observe(div, { attributes: true });

              setTimeout(() => {
                console.log('E');
                Promise.resolve().then(() => console.log('F'));
                requestAnimationFrame(() => console.log('G'));
              }, 0);

              Promise.resolve().then(() => {
                console.log('H');
                setTimeout(() => {
                  console.log('I');
                  Promise.resolve().then(() => console.log('J'));
                }, 0);
              });

              div.setAttribute('id', 'test');

              requestAnimationFrame(() => console.log('K'));
            })()} */}
            {(() => {
              console.log('A');

              const div = document.createElement('div');

              const observer = new MutationObserver(() => {
                console.log('B');
                Promise.resolve().then(() => console.log('C'));
                setTimeout(() => console.log('D'), 0);
              });
              observer.observe(div, { attributes: true });

              setTimeout(() => {
                console.log('E');
                Promise.resolve().then(() => console.log('F'));
                requestAnimationFrame(() => console.log('H'));
              }, 0);

              Promise.resolve().then(() => console.log('I'));

              requestAnimationFrame(() => console.log('J'));

              async function tricky() {
                console.log('K');
                await Promise.resolve();
                console.log('L');
                await null;
                console.log('M');
                div.setAttribute('data-x', '1');
                await new Promise(res => setTimeout(() => {
                  console.log('N');
                  res();
                }, 0));
                console.log('O');
                Promise.resolve().then(() => console.log('P'));
              }

              tricky();
            })()}
            {(() => {
              fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json()) // Processes the response and returns a new promise
                .then(data => {
                  console.log('Processed data:', data[0]);
                  return fetch(`https://jsonplaceholder.typicode.com/todos/${data[0].id}`); // Returns another promise
                })
                .then(detailsResponse => detailsResponse.json())
                .then(details => {
                  console.log('Details:', details);
                })
                .catch(error => {
                  console.error('An error occurred:', error); // Catches errors from any part of the chain
                })
                .finally(() => {
                  console.log('Promise chain finished.'); // Executes regardless of success or failure
                });
            })()}
            <input type="text" onClick={() => {
              const data = navigator.clipboard.readText();
              data.then((res) => setCopied(res));
            }} defaultValue={copied} />

          </div>
          <button type="submit" className="w-full">
            Submit
          </button>
        </form>
        {JSON.stringify(state)}
        {JSON.stringify(newS)}
      </div>

      <Children handleSomething={handleSomething} data={data} />
    </div>
  );
};


const Children = React.memo(({ handleSomething, data }) => {
  console.log("Child Rendered")
  const newData = [addEventListener]
  return <h1>Children {JSON.stringify(data)}{JSON.stringify(newData)}</h1>
})