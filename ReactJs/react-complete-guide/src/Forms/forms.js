import "./forms.css";
function Forms() {
  return (
    <form className="form_content">
      <label className="contact_label">
        Name
        <input type="text" name="name" />
      </label>

      <label className="contact_label">
        Description
        <input type="text" name="description" />
      </label>

      <label className="contact_label">
        Price
        <input type="number" name="price" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default Forms;
