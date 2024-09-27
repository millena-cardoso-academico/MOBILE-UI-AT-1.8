import profilePic from '../images/profile.webp';
import phoneIcon from '../images/phone.webp';
import mailIcon from '../images/mail.webp';
import locationIcon from '../images/location.png';

const TaskCard = () => (
  <div className="card-container">
    <div className="top-section">
      <div className="profile-section">
        <img className="profile-image" src={profilePic} alt="Sheldon Cooper" />
      </div>

      <div className="info-section">
        <h2 className="name">Sheldon Cooper</h2>
        <p className="info">Data de Nascimento: 26 de fevereiro de 1980</p>
        <p className="info">Setor: Física Teórica</p>
        <p className="info">Cargo: Físico Teórico</p>
      </div>

      <div className="icon-section">
        <img className="icon" src={phoneIcon} alt="Telefone" />
        <img className="icon" src={mailIcon} alt="Email" />
        <img className="icon" src={locationIcon} alt="Localização" />
      </div>
    </div>

    <div className="task-section">
      <table className="task-table">
        <thead>
          <tr>
            <th className="table-header">Estado</th>
            <th className="table-header">Tarefas</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td className="table-data">
              <input className="checkbox" type="checkbox" /> Tarefa 1
            </td>
            <td className="table-data">Estudar Teoria das Cordas</td>
          </tr>
          <tr className="table-row">
            <td className="table-data">
              <input className="checkbox" type="checkbox" /> Tarefa 2
            </td>
            <td className="table-data">Preparar aula sobre física quântica</td>
          </tr>
          <tr className="table-row">
            <td className="table-data">
              <input className="checkbox" type="checkbox" /> Tarefa 3
            </td>
            <td className="table-data">Resolver equações de física teórica</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default TaskCard;
