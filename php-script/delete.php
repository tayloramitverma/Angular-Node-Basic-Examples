<?php

$data = json_decode(file_get_contents('php://input'), TRUE);

if (isset($data['task'])) {

    require __DIR__ . '/lib.php';

    $task_id = (isset($data['task']['id']) ? $data['task']['id'] : NULL);

    // Delete the Task
    $task = new Task();

    $task->Delete($task_id);
}

?>