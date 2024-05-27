# Project

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

<p align="center">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" height="60" width="60" style="vertical-align:top; margin:4px"> <!-- VS Code -->
<img src="https://raw.githubusercontent.com/jmnote/z-icons/master/svg/git.svg" alt="Git" height="60" width="60" style="vertical-align:top; margin:4px">  <!-- Git -->
<img src="https://pngset.com/images/github-logo-label-text-symbol-transparent-png-2425199.png" alt="Git" height="60" width="60" style="vertical-align:top; margin:4px">  <!-- Github -->
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript" height="60" width="60" style="; margin:4px"> <!-- Javascript -->
<img src="https://cdn-3.expansion.mx/dims4/default/1e07859/2147483647/strip/true/crop/1800x1221+0+0/resize/1800x1221!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F25%2F18%2Fe7adcf924adabd501df2e60e9e24%2Fopenai-detector-deepfakes.jpeg" alt="Javascript" height="60" width="60" style="; margin:4px"> <!-- Open AI -->
</p>

## Table of Contents

- [Description](#description) ::pencil2:
- [Installation](#installation) ::electric_plug:
- [Usage](#usage) ::computer:
- [Contributing](#contributing)
- [License](#license) ::page_with_curl:
- [Authors](#authors) ::busts_in_silhouette:
- [Acknowledgments](#acknowledgments) : :pray:

___
## Description

**Structure of the project:**

```
├── input/                           # Directory for input files.
├── /results                         # Directory for output files.
├── /src                             # Source code directory.
│   ├── /prompts                     # Directory for different prompt types.
│   │   ├── /generate-data           # Prompt type for generating data.
│   │   ├── /read-content           # Prompt type for read content data (complex or large).
│   │   ├── /transform-data           # Prompt type for transform data type formats or content as corresponding.
│   ├── /utils                       # Directory for utility modules.
│   │   ├── file.js                  # Utility module for file operations.
│   │   ├── openai.js                # Utility module for interacting with OpenAI API.
├── .env                             # Environment configuration file.
├── .eslintrc                        # ESLint configuration file.
├── .gitignore                       # Git ignore file.
├── LICENSE                          # License file.
├── package-lock.json                # Lock file for npm package versions.
├── package.json                     # Project metadata and dependencies.
└── README.md                        # Project documentation.
```

The project is a versatile tool designed to streamline various aspects of software quality assurance processes. Leveraging the OpenAI API, it offers functionalities tailored to the needs of software quality engineers, aiding in the generation of **custom test data**, **reading complex or extensive content** from files, and **transforming data formats and content** as required.

### **Key Features:**

- [ ] **Data Generation:** The project provides a prompt-driven interface for generating diverse sets of test data. Users can specify their requirements and obtain tailored data outputs suitable for testing various scenarios.

- [ ] **Content Reading:** With the ability to parse and comprehend complex or extensive content from files, the project enables software quality engineers to efficiently extract relevant information for testing purposes.

- [ ] **Format Transformation:** Facilitating the conversion of data formats and content, the project empowers users to adapt information to different contexts or systems seamlessly. This feature enhances flexibility and interoperability in testing workflows.

### Components:

- Source Code Directory (/src): Houses the core functionalities of the project, including modules for prompts, data generation, content reading, and format transformation.

- Utility Modules (/utils): Contains essential utility modules such as file.js, facilitating file operations, and openai.js, enabling interaction with the OpenAI API.
___
## Usage

### Usage:

To run any of the commands listed below, open your terminal and navigate to the root directory of your project. Then, simply execute the corresponding npm script command.


1. **generate-access-tokens**:
   - **Description**: This command generates access tokens using predefined types.
   - **Command**: `npm run generate-access-tokens`

2. **generate-date-types**:
   - **Description**: This command generates date types.
   - **Command**: `npm run generate-date-types`

3. **generate-email-types**:
   - **Description**: This command generates email types.
   - **Command**: `npm run generate-email-types`

4. **generate-test-data**:
   - **Description**: This command generates test data.
   - **Command**: `npm run generate-test-data`

5. **read-complex-content**:
   - **Description**: This command reads complex content from files.
   - **Command**: `npm run read-complex-content`

6. **read-large-file**:
   - **Description**: This command reads large files.
   - **Command**: `npm run read-large-file`

7. **create-gherkins**:
   - **Description**: This command creates Gherkin files.
   - **Command**: `npm run create-gherkins`

8. **create-test-cases**:
   - **Description**: This command creates test cases.
   - **Command**: `npm run create-test-cases`




#### Environment Configuration:

- **Environment Variables** (` .env`): Configuration file for environment-specific settings, ensuring seamless deployment across different environments.

#### Quality Assurance:

- **ESLint Configuration** (` .eslintrc`): Configuration file for ESLint, facilitating code consistency and adherence to best practices.

#### Version Control:

- **Git Ignore File** (`.gitignore`): Specifies intentionally untracked files to be ignored by version control systems, ensuring clean and efficient repository management.

#### Licensing:

- **License File** (`LICENSE`): Contains the project's licensing information, providing clarity on the terms of use and distribution.

#### Dependencies Management:

- **Package Lock File** (`package-lock.json`): Lock file for npm package versions, ensuring deterministic and reproducible builds across different environments.

- **Package Configuration** (`package.json`): Metadata and dependencies configuration file, centralizing project information and specifying required dependencies for seamless execution.

#### Documentation:

- **Project Documentation** (`README.md`): Comprehensive documentation providing an overview of the project, its features, components, and usage instructions, catering to both developers and stakeholders.


___
## Contributing

-Guidelines for contributing to the project. Include how to clone the repository, create a branch, make commits, and submit pull requests.

- [ ] Fork the project
- [ ] Create your Feature Branch (`git checkout -b feature/new-feature`)
- [ ] Commit your changes (`git commit -m 'Add new feature'`)
- [ ] Push to the branch (`git push origin feature/new-feature`)
- [ ] Open a Pull Request

___
## License
This project is licensed under the MIT License. See the LICENSE file for details.

___
## Authors

* **@author:** Fabián Portillo González 

* **@github user:** fabianpg95

___
## Acknowledgements

I would like to express my gratitude to the following:

- **Wizeline:** For organizing and supporting the Testing Days event and make it possible.
- **The members of the AI Committee Team at Wizeline:** For their dedication in promoting the event and providing guidance throughout the process, addressing any queries we had and facilitating our work.
