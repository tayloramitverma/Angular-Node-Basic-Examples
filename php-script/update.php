<?php

$data = json_decode(file_get_contents('php://input'), TRUE);

if (isset($data['task'])) {

    require __DIR__ . '/lib.php';

    $name = (isset($data['task']['name']) ? $data['task']['name'] : NULL);
    $description = (isset($data['task']['description']) ? $data['task']['description'] : NULL);
    $task_id = (isset($data['task']['id']) ? $data['task']['id'] : NULL);

    // validations
    if ($name == NULL) {
        http_response_code(400);
        echo json_encode(['errors' => ["Name Field is required"]]);

    } else {

        // Update the Task
        $task = new Task();

        $task->Update($name, $description, $task_id);
    }
}

?>