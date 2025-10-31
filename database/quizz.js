const schema = {
  id: 1,
  category: "biology",
  theme: "botânica",
  type: "true/false",
  difficulty: "easy",
  question: "seria esse o lugar para a pergunta",
  answers: [
    {
      text: "resposta correta",
      key: "true"
    },
    {
      text: "resposta incorreta",
      key: "false"
    },
  ]
}

export const quizzOptions = {
  title: [
    { text: "ADD QUESTION", language: "en" },
    { text: "ADICIONAR PERGUNTA", language: "pt-br" },
  ],
  categories: [
    {
      key: "mathematics",
      display: [
        { text: "mathematics", language: "en" },
        { text: "matemática", language: "pt-br" },
      ],
      themes: [
        {
          key: "arithmetic",
          display: [
            { text: "arithmetic", language: "en" },
            { text: "aritmética", language: "pt-br" },
          ],
        },
        {
          key: "algebra",
          display: [
            { text: "algebra", language: "en" },
            { text: "álgebra", language: "pt-br" },
          ],
        },
        {
          key: "geometry",
          display: [
            { text: "geometry", language: "en" },
            { text: "geometria", language: "pt-br" },
          ],
        },
        {
          key: "statistics",
          display: [
            { text: "statistics", language: "en" },
            { text: "estatística", language: "pt-br" },
          ],
        },
        {
          key: "logic",
          display: [
            { text: "logic", language: "en" },
            { text: "lógica", language: "pt-br" },
          ],
        },
      ],
    },
    {
      key: "physics",
      display: [
        { text: "physics", language: "en" },
        { text: "física", language: "pt-br" },
      ],
      themes: [
        { key: "mechanics", display: [{ text: "mechanics", language: "en" }, { text: "mecânica", language: "pt-br" }] },
        { key: "thermodynamics", display: [{ text: "thermodynamics", language: "en" }, { text: "termodinâmica", language: "pt-br" }] },
        { key: "waves", display: [{ text: "waves", language: "en" }, { text: "ondas", language: "pt-br" }] },
        { key: "electricity", display: [{ text: "electricity", language: "en" }, { text: "eletricidade", language: "pt-br" }] },
        { key: "optics", display: [{ text: "optics", language: "en" }, { text: "óptica", language: "pt-br" }] },
      ],
    },
    {
      key: "chemistry",
      display: [
        { text: "chemistry", language: "en" },
        { text: "química", language: "pt-br" },
      ],
      themes: [
        { key: "matter", display: [{ text: "structure of matter", language: "en" }, { text: "estrutura da matéria", language: "pt-br" }] },
        { key: "reactions", display: [{ text: "chemical reactions", language: "en" }, { text: "reações químicas", language: "pt-br" }] },
        { key: "periodic_table", display: [{ text: "periodic table", language: "en" }, { text: "tabela periódica", language: "pt-br" }] },
        { key: "organic", display: [{ text: "organic chemistry", language: "en" }, { text: "química orgânica", language: "pt-br" }] },
      ],
    },
    {
      key: "general_knowledge",
      display: [
        { text: "general knowledge", language: "en" },
        { text: "conhecimentos gerais", language: "pt-br" },
      ],
      themes: [
        { key: "culture", display: [{ text: "culture and arts", language: "en" }, { text: "cultura e artes", language: "pt-br" }] },
        { key: "inventions", display: [{ text: "inventions and technology", language: "en" }, { text: "invenções e tecnologia", language: "pt-br" }] },
        { key: "sports", display: [{ text: "sports", language: "en" }, { text: "esportes", language: "pt-br" }] },
        { key: "applied_science", display: [{ text: "applied science", language: "en" }, { text: "ciência aplicada", language: "pt-br" }] },
      ],
    },
    {
      key: "geography",
      display: [
        { text: "geography", language: "en" },
        { text: "geografia", language: "pt-br" },
      ],
      themes: [
        { key: "physical", display: [{ text: "physical geography", language: "en" }, { text: "geografia física", language: "pt-br" }] },
        { key: "climate", display: [{ text: "climate and biomes", language: "en" }, { text: "clima e biomas", language: "pt-br" }] },
      ],
    },
    {
      key: "biology",
      display: [
        { text: "biology", language: "en" },
        { text: "biologia", language: "pt-br" },
      ],
      themes: [
        { key: "genetics", display: [{ text: "genetics", language: "en" }, { text: "genética", language: "pt-br" }] },
        { key: "ecology", display: [{ text: "ecology", language: "en" }, { text: "ecologia", language: "pt-br" }] },
        { key: "microbiology", display: [{ text: "microbiology", language: "en" }, { text: "microbiologia", language: "pt-br" }] },
        { key: "evolution", display: [{ text: "evolution", language: "en" }, { text: "evolução", language: "pt-br" }] },
        { key: "botany", display: [{ text: "botany", language: "en" }, { text: "botânica", language: "pt-br" }] },
        { key: "zoology", display: [{ text: "zoology", language: "en" }, { text: "zoologia", language: "pt-br" }] },
        { key: "human_physiology", display: [{ text: "human physiology", language: "en" }, { text: "fisiologia humana", language: "pt-br" },
      ],}
      ],
    },
    {
      key: "history",
      display: [
        { text: "history", language: "en" },
        { text: "história", language: "pt-br" },
      ],
      themes: [
        { key: "lakshimir", display: [{ text: "Lakshimir", language: "en" }] },
        { key: "mainland", display: [{ text: "mainland", language: "en" }, { text: "continente", language: "pt-br" }] },
        { key: "plano espiritial", display: [{ text: "spiritual plane", language: "en" }, { text: "plano espiritial", language: "pt-br" }] },
        { key: "plano das divindades", display: [{ text: "divinity plane", language: "en" }, { text: "plano das divindades", language: "pt-br" }] }
      ],
    },
  ],
  difficulty: [
    {
      key: "starter",
      display: [
        { text: "starter", language: "en" },
        { text: "iniciane", language: "pt-br" },
      ],
    },
    {
      key: "easy",
      display: [
        { text: "easy", language: "en" },
        { text: "fácil", language: "pt-br" },
      ],
    },
    {
      key: "medium",
      display: [
        { text: "medium", language: "en" },
        { text: "intermediário", language: "pt-br" },
      ],
    },
    {
      key: "advanced",
      display: [
        { text: "advanced", language: "en" },
        { text: "avançado", language: "pt-br" },
      ],
    },
    {
      key: "hard",
      display: [
        { text: "hard", language: "en" },
        { text: "difícil", language: "pt-br" },
      ],
    },
    {
      key: "hard",
      display: [
        { text: "hard", language: "en" },
        { text: "difícil", language: "pt-br" },
      ],
    }
  ],
  type: [
    {
      key: "common",
      display: [
        { text: "common", language: "en" },
        { text: "comum", language: "pt-br" },
      ],
    },
    {
      key: "true/false",
      display: [
        { text: "true or false", language: "en" },
        { text: "verdadeiro ou falso", language: "pt-br" },
      ],
    },
    {
      key: "multiple",
      display: [
        { text: "multiple choice", language: "en" },
        { text: "múltipla escolha", language: "pt-br" },
      ],
    }
  ]
}