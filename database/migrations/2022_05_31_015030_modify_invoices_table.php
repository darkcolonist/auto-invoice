<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('invoices', function (Blueprint $table) {
        $table->dropUnique('invoices_id_unique');
        $table->primary('id');
        $table->index('created_at');
        $table->index('updated_at');
        $table->index('name');
        $table->index('status');
        $table->index('invoice_no');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('invoices', function (Blueprint $table) {
        $table->dropPrimary('id');
        $table->unique('id');
        $table->dropIndex('created_at');
        $table->dropIndex('updated_at');
        $table->dropIndex('name');
        $table->dropIndex('status');
        $table->dropIndex('invoice_no');
      });
    }
};
