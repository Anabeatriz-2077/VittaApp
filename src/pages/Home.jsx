import { useEffect, useState } from "react";

import api from "../../api/api";

import Navbar from "../../components/Navbar/Navbar";
import ProfessionalCard from "../../components/ProfessionalCard/ProfessionalCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Loading from "../../components/Loading/Loading";

import "./Home.css";

function Home() {

  // Lista original
  const [professionals, setProfessionals] = useState([]);

  // Lista filtrada
  const [filtered, setFiltered] = useState([]);

  // Loading da API
  const [loading, setLoading] = useState(true);

  // Erro da API
  const [error, setError] = useState("");

  /*
  useEffect executa quando a página abre
  */
  useEffect(() => {
    loadProfessionals();
  }, []);

  async function loadProfessionals() {
    try {

      setLoading(true);

      /*
      API real
      */
      const response = await api.get("?results=12");

      /*
      Monta profissionais
      */
      const data = response.data.results.map((item, index) => ({
        id: index + 1,
        name: `${item.name.first} ${item.name.last}`,
        image: item.picture.large,
        city: item.location.city,
        price: Math.floor(Math.random() * 100 + 80),
        rating: (Math.random() * 2 + 3).toFixed(1),
        experience: Math.floor(Math.random() * 10 + 1),
        specialty: [
          "Personal Trainer",
          "Pilates",
          "Yoga",
          "Nutrição"
        ][Math.floor(Math.random() * 4)]
      }));

      setProfessionals(data);
      setFiltered(data);

      /*
      Salva no LocalStorage
      */
      localStorage.setItem(
        "professionals",
        JSON.stringify(data)
      );

    } catch (err) {

      setError("Erro ao carregar profissionais.");

    } finally {

      setLoading(false);

    }
  }

  /*
  Pesquisa profissionais
  */
  function handleSearch(value) {

    const result = professionals.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.specialty.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(result);
  }

  if (loading) return <Loading />;

  if (error) return <h2>{error}</h2>;

  return (
    <div>

      <Navbar />

      <div className="container">

        <SearchBar onSearch={handleSearch} />

        <CategoryFilter />

        <h2>Profissionais Disponíveis</h2>

        <div className="grid">

          {filtered.map((professional) => (

            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;