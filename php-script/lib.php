<?php

require __DIR__ . '/config.php';

/**
 * Class Task
 */
class Task
{

    /**
     * @var mysqli|PDO|string
     */
    protected $db;

    /**
     * Task constructor.
     */
    public function __construct()
    {
        $this->db = DB();
    }

    /**
     * Add new Task
     *
     * @param $name
     * @param $description
     *
     * @return string
     */
    public function Create($name, $description)
    {
        $query = $this->db->prepare("INSERT INTO tasks(name, description) VALUES (:name,:description)");
        $query->bindParam("name", $name, PDO::PARAM_STR);
        $query->bindParam("description", $description, PDO::PARAM_STR);
        $query->execute();

        return json_encode(['task' => [
            'id'          => $this->db->lastInsertId(),
            'name'        => $name,
            'description' => $description
        ]]);
    }

    /**
     * List Tasks
     *
     * @return string
     */
    public function Read()
    {
        $query = $this->db->prepare("SELECT * FROM tasks");
        $query->execute();
        $data = array();
        while ($row = $query->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }

        return json_encode(['tasks' => $data]);
    }


    /**
     * Update Task
     *
     * @param $name
     * @param $description
     * @param $task_id
     */
    public function Update($name, $description, $task_id)
    {
        $query = $this->db->prepare("UPDATE tasks SET name = :name, description = :description WHERE id = :id");
        $query->bindParam("name", $name, PDO::PARAM_STR);
        $query->bindParam("description", $description, PDO::PARAM_STR);
        $query->bindParam("id", $task_id, PDO::PARAM_STR);
        $query->execute();
    }

    /**
     * Delete Task
     *
     * @param $task_id
     */
    public function Delete($task_id)
    {
        $query = $this->db->prepare("DELETE FROM tasks WHERE id = :id");
        $query->bindParam("id", $task_id, PDO::PARAM_STR);
        $query->execute();
    }
}