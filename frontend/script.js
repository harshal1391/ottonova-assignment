fetch("http://localhost:8080/api/cities")
  .then((response) => {
    return response.json();
  })
  .then((body) => {
    let cities = body.cities;
    let placeholders = document.querySelector("#data-output");
    let out = "";
    for (let city of cities) {
      let landmark = "";
      for (let i = 0; i < city.landmarks.length; i++) {
        if (i + 1 < city.landmarks.length) {
          landmark = landmark + city.landmarks[i] + "," + "<br>";
        } else {
          landmark = landmark + city.landmarks[i];
        }
      }
      out += `
        <tr>
        <td>${city.name}</td>
            <td>${city.name_native}</td>
            <td>${city.country}</td>
            <td>${city.continent}</td>
            <td>${city.latitude}</td>
            <td>${city.longitude}</td>
            <td>${city.population}</td>
            <td>${city.founded}</td>
            <td>${landmark}</td>
        </tr>
        `;
    }
    placeholders.innerHTML = out;
  });
