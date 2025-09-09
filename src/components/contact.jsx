export const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const pass = e.target[1].value;
    console.log(name, pass);
  }

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
              rows={4}
              name="feedback"
              placeholder="Enter your feedback here..."
            ></textarea>
          </div>

          <p className="text-xs">hint: username=anything, password=anything</p>
          <button type="submit" className="w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
